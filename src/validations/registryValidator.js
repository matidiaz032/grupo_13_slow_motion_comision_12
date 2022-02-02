const { check, body } = require('express-validator');
const { User } = require('../database/models/index.js');


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debe ingresar un nombre'),

    check('lastName')
    .notEmpty()
    .withMessage('Debe ingresar un apellido'),

    check('userName')
    .notEmpty()
    .withMessage('Debe ingresar un nombre de usuario'),

    check('email')
    .isEmail()
    .withMessage('Debe ingresar un email valido'),

    body('email').custom((value) => {
       return User.findOne({ 
            where: {
                email: value
            } 
        })
        .then(user => {
            if(user){
                return Promise.reject('Email ya registrado')
            }
        })
    }),

    check('pass1')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isAlphanumeric()
    .withMessage('La contraseña debe ser alfanumerica (A-Z y 0-9)')
    .isLength({
        min: 6,
        max: 16
    })
    .withMessage('La contraseña debe tener entre 6 y 16 caracteres'),

    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')
]