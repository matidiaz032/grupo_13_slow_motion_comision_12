const { check, body} = require('express-validator');
const { User } = require('../database/models/index.js');


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debe ingresar un nombre')
    .isLength({
        min: 2,
        max: 25
    })
    .withMessage('El nombre debe tener entre 2 y 25 caracteres'),

    check('lastName')
    .notEmpty()
    .withMessage('Debe ingresar un apellido')
    .isLength({
        min: 2,
        max: 25
    })
    .withMessage('El apellido debe tener entre 2 y 25 caracteres'),

    check('userName')
    .notEmpty()
    .withMessage('Debe ingresar un nombre de usuario')
    .isLength({
        min: 2,
        max: 25
    })
    .withMessage('El nombre de usuario debe tener entre 2 y 25 caracteres'),

    check('email')
    .isEmail()
    .withMessage('Debe ingresar un email valido'),

    body('email')
        .custom((value) => {
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
    .isLength({
        min: 8,
        max: 16
    })
    .withMessage('La contraseña debe tener entre 6 y 16 caracteres')
    .isAlphanumeric()
    .withMessage('La contraseña debe ser alfanumerica'),

    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones')
]