const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const auth_userLogin = require('../middlewares/auth_userProfile');
const auth_userProfile = require('../middlewares/auth_userProfile');
const upload = require('../middlewares/uploadImagesUser')
const registryValidator = require('../validations/registryValidator')
const loginValidator = require('../validations/loginValidator')

/* Se carga la imagen aunque el registro tenga errores y no se cree el usuario, 
y no puedo validar que la contrase;a sea estrictamente alfanumerico.  */

router.get('/login', auth_userLogin,  controller.login);
router.post('/login', loginValidator, controller.loadLogin);
router.get('/register', controller.register);
router.post('/register', upload.single('userImage'), registryValidator, controller.loadRegister);
router.get('/profile', auth_userProfile, controller.profile);
router.get('/logOut', controller.logOut);

module.exports = router;