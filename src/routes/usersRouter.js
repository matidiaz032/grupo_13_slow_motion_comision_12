const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const upload = require('../middlewares/uploadImagesUser')
const registryValidator = require('../validations/registryValidator')

/* Se carga la imagen aunque el registro tenga errores, y no puedo validar que sea estrictamente alfanumerico,  */

router.get('/login', controller.login);
router.get('/register', controller.register);
router.post('/register', upload.single('userImage'), registryValidator, controller.loadRegister);
router.get('/profile', controller.profile);

module.exports = router;