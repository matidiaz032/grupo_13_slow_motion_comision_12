let express = require('express');
let router = express.Router();
const controller = require('../controllers/productsController.js');

router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/detail', controller.detail);
router.get('/cart', controller.cart);

module.exports = router;