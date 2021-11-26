let express = require('express');
let router = express.Router();
const controller = require('../controllers/profileController.js');

router.get('/', controller.index);

module.exports = router;