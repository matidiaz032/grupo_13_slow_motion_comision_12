let express = require('express');
let router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.index);

module.exports = router;