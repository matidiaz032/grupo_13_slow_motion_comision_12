const { check, body } = require('express-validator');
const { User } = require('../database/models/index.js');

module.exports = [
    check('first_name')
    .notEmpty()
    .withMessage('El campo nombre es obligatorio').bail()
    .isLength({ min: 3, max: 30 })
    .withMessage('El nombre de tener entre 3 y 30 caracteres'),

    check('last_name')
    .notEmpty()
    .withMessage('El campo apellido es obligatorio').bail()
    .isLength({ min: 3, max: 30 })
    .withMessage('El apellido de tener entre 3 y 30 caracteres'),

    check('user_name')
    .notEmpty()
    .withMessage('El campo nombre de usuario es obligatorio').bail()
    .isLength({ min: 3, max: 30 })
    .withMessage('El nombre de tener entre 3 y 30 caracteres'),

    check('email')
    .notEmpty()
    .withMessage('El campo email es obligatorio').bail()
    .isEmail()
    .withMessage('Debe ingresar un email valido'),

    check('actualPassword')
    .notEmpty()
    .withMessage("La contraseña actual es obligatoria"),

    body('actualPassword')
    .custom((value, {req}) => {
        let user = User.find( user => user.email == req.body.email);
        console.log(user);

        if(user) {
            bcrypt.compareSync(value, user.password) ? true : false   
        } else {
            return false
        }
    }).withMessage('La contraseña actual es incorrecta'),

    check('newPassword')
    .notEmpty()
    .withMessage('La contraseña nueva es obligatoria')
    .isLength({
        min: 6,
        max: 16
    })
    .withMessage('La contraseña debe tener entre 6 y 16 caracteres')
    .isAlphanumeric()
    .withMessage('La contraseña debe ser alfanumerica'),
]