let express = require('express');
let router = express.Router();
const controller = require('../controllers/registerController.js');

router.get('/', controller.index);

module.exports = router;