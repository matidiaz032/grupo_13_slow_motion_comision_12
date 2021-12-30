const path = require('path');
const multer = require('multer');

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

module.exports = upload