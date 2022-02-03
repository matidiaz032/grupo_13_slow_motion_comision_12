const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const upload = require('../middlewares/uploadImagesUser')
const auth_users = require('../middlewares/auth_users');
const registryValidator = require('../validations/registryValidator')
const loginValidator = require('../validations/loginValidator')

/* Se carga la imagen aunque el registro tenga errores y no se cree el usuario, 
y no puedo validar que la contrase;a sea estrictamente alfanumerico.  */

router.get('/login',  controller.login);
router.post('/login', loginValidator, controller.loadLogin);
router.get('/register', controller.register);
router.post('/register', upload.single('userImage'), registryValidator, controller.loadRegister);
router.get('/profile', auth_users, controller.profile);
router.get('/logout', controller.logout);
router.get('/favorites', controller.favorites)

module.exports = router;