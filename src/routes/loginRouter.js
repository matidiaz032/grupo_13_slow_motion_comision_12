let express = require('express');
let router = express.Router();
const controller = require('../controllers/loginController.js');

router.get('/', controller.index);

module.exports = router;