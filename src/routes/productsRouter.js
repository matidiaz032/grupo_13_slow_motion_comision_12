let express = require('express');
let router = express.Router();
const controller = require('../controllers/productsController.js');
const auth_users = require('../middlewares/auth_users.js');

router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/serialMovie/:id', controller.serialMovie);
router.get('/serialSerie/:id', controller.serialSerie);
router.get('/cart', auth_users, controller.cart);

module.exports = router;