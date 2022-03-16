const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersController');
const upload = require('../middlewares/uploadImagesUser')
const auth_users = require('../middlewares/auth_users');
const registryValidator = require('../validations/registryValidator');
const loginValidator = require('../validations/loginValidator');
const profileValidator = require('../validations/profileValidator');
const profileAuthValidator = require('../validations/profileAuthValidator');
/* const changeAvatarValidator = require('../validations/changeAvatarValidator'); */
const authUsers = require('../middlewares/authUsers');

router.get('/login', authUsers, controller.login);
router.post('/login', loginValidator, controller.loadLogin);
router.get('/register', authUsers, controller.register);
router.post('/register', upload.single('userImage'), registryValidator, controller.loadRegister);
router.get('/profile', auth_users, controller.profile);
router.post('/profile', profileValidator, controller.optionalProfile);
router.get('/profile-auth', auth_users, controller.profileAuth);
router.post('/profile-auth', profileAuthValidator, controller.optionalProfileAuth);
router.put('/change-avatar', upload.single('changeAvatar'), controller.changeAvatar);
router.get('/logout', controller.logout);
router.get('/favorites', auth_users, controller.favorites)
router.post('/favorites', auth_users, controller.addFavorite)
router.delete('/favorites', auth_users, controller.destroyFavorite)

module.exports = router;