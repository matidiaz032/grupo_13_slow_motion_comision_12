let express = require('express');
let router = express.Router();
const controller = require('../controllers/registerController.js');

router.get('/detail', controller.index);

module.exports = router;