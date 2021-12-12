let express = require('express');
let router = express.Router();
const controller = require('../controllers/adminController.js');

router.get('/', controller.index);
router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/motionUsers', controller.motionUsers);
router.get('/form/movie', controller.uploadMovie);
router.post('/form/movie', controller.storeMovies);
//router.get('/form/series', controller.uploadSeries);
//router.post('/form/series', controller.storeSeries);
//router.get('/statistics', controller.statistics);
router.get('/products/movie/:id/edit', controller.editMovie);
router.get('/products/serie/:id/edit', controller.editSerie);
router.put('/products/movie/:id', controller.editSuccessMovie);
router.put('/products/serie/:id', controller.editSuccessSerie);
router.delete('/deleteProduct/:id', controller.deleteProduct);

module.exports = router;