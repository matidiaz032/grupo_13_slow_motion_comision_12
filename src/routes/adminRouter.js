let express = require('express');
let router = express.Router();
const controller = require('../controllers/adminController.js');

router.get('/', controller.index);
router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/motionUsers', controller.motionUsers);
router.get('/form', controller.form);
router.get('/statistics', controller.statistics);

module.exports = router;