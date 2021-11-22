let express = require('express');
let router = express.Router();
const controller = require('../controllers/moviesController.js');

router.get('/', controller.index);
router.get('/detail/:id', controller.detail);


module.exports = router;