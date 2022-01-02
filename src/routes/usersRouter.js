const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const upload = require('../middlewares/uploadImagesUser')
const registryValidator = require('../validations/registryValidator')

/* Se carga la imagen aunque el registro tenga errores y no se cree el usuario, 
y no puedo validar que la contrase;a sea estrictamente alfanumerico.  */

router.get('/login', controller.login);
router.get('/register', controller.register);
router.post('/register',registryValidator, upload.single('userImage'), controller.loadRegister);
router.get('/profile', controller.profile);

module.exports = router;