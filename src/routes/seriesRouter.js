let express = require('express');
let router = express.Router();
const controller = require('../controllers/seriesController.js');

router.get('/', controller.index);
router.get('/detail/:id', controller.detail);


module.exports = router;