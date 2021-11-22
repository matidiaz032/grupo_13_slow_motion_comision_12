let express = require('express');
let router = express.Router();
const controller = require('../controllers/detailController.js');

router.get('/', controller.index);

module.exports = router;