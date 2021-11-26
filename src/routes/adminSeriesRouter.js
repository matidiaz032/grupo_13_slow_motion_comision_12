let express = require('express');
let router = express.Router();
const controller = require('../controllers/adminSeriesController');

router.get('/', controller.index);

module.exports = router;