let express = require('express');
let router = express.Router();
const controller = require('../controllers/adminController.js');
const upload = require('../middlewares/uploadImagesProduct');
const productValidator = require('../validations/productValidator.js');
const editMovieValidator = require('../validations/editMovieValidator.js')
const editSerieValidator = require('../validations/editSerieValidator.js')

router.get('/', controller.index);
router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/motionUsers', controller.motionUsers);
router.get('/form', controller.upload);
router.post('/form', upload.single('productImage'), productValidator, controller.store);
router.get('/statistics', controller.statistics);
router.get('/products/movie/:id/edit', controller.editMovie);
router.get('/products/serie/:id/edit', controller.editSerie);
router.put('/products/movie/:id', upload.single('productImage'), editMovieValidator, controller.editSuccessMovie);
router.put('/products/serie/:id', upload.single('productImage'), editSerieValidator, controller.editSuccessSerie);
router.delete('/deleteProductMovie/:id', controller.deleteProductMovie);
router.delete('/deleteProductSerie/:id', controller.deleteProductSerie);

module.exports = router;