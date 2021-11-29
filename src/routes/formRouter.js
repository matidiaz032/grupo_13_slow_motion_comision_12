let express = require('express');
let router = express.Router();
const controller = require('../controllers/formController');

router.get('/', controller.index);

module.exports = router;