let express = require('express');
let router = express.Router();
const controller = require('../controllers/adminController.js');
const upload = require('../middlewares/uploadImagesProduct')

router.get('/', controller.index);
router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/motionUsers', controller.motionUsers);
router.get('/form', controller.upload);
router.post('/form', upload.single('productImage') ,controller.store);
router.get('/statistics', controller.statistics);
router.get('/products/movie/:id/edit', controller.editMovie);
router.get('/products/serie/:id/edit', controller.editSerie);
router.put('/products/movie/:id', upload.single('productImage'), controller.editSuccessMovie);
router.put('/products/serie/:id', upload.single('productImage'), controller.editSuccessSerie);
router.delete('/deleteProductMovie/:id', controller.deleteProductMovie);
router.delete('/deleteProductSerie/:id', controller.deleteProductSerie);
router.post('/genre', controller.agregaGeneros);
router.post('/idiom', controller.agregaIdiomas)

module.exports = router;