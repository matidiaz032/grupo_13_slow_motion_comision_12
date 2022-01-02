const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/users-images'))
    },
    filename: (req, file, cb) => {
        const newFilename = Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
})

const fileFilter = function(req, file,cb) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.fileValidationError = "Debe cargar una imagen (.jpg, .jpeg, .png, .gif)";
        return cb(null,false,req.fileValidationError);
    }
    cb(null,true);
}

const upload = multer({ storage, fileFilter });

module.exports = upload