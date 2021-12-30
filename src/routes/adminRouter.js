let express = require('express');
<<<<<<< HEAD
let multer = require('multer');
let path = require('path');
let router = express.Router();
const controller = require('../controllers/adminController.js');

const storage = multer.diskStorage({
     destination: (req, file, cb) => {
         cb(null, path.join(__dirname, '../../public/img/products-images'))
    } ,
    filename: (req, file, cb) => {
         const newFilename = Date.now() + path.extname(file.originalname);
         cb(null, newFilename);
    }
 }) 

const upload = multer({ storage });
=======
let router = express.Router();
const controller = require('../controllers/adminController.js');
const upload = require('../middlewares/uploadImagesProduct')
>>>>>>> fcb12c32d712dfd5f7e419f84b4882a44305a818

router.get('/', controller.index);
router.get('/movies', controller.movies);
router.get('/series', controller.series);
router.get('/motionUsers', controller.motionUsers);
router.get('/form', controller.upload);
router.post('/form', upload.single('productImage') ,controller.store);
//router.get('/statistics', controller.statistics);
router.get('/products/movie/:id/edit', controller.editMovie);
router.get('/products/serie/:id/edit', controller.editSerie);
router.put('/products/movie/:id', upload.single('productImage'), controller.editSuccessMovie);
router.put('/products/serie/:id', upload.single('productImage'), controller.editSuccessSerie);
router.delete('/deleteProductMovie/:id', controller.deleteProductMovie);
router.delete('/deleteProductSerie/:id', controller.deleteProductSerie);

module.exports = router;