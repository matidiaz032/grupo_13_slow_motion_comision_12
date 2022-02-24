let express = require('express');
let router = express.Router();
const controller = require('../controllers/indexController');

router.get('/', controller.index);
router.get('/faq', controller.faq);



module.exports = router;