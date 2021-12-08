let express = require('express');
let router = express.Router();
const controller = require('../controllers/usersController');

router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/profile', controller.profile);

module.exports = router;