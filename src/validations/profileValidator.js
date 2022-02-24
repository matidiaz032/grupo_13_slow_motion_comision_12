const { check, body } = require('express-validator');
const { User } = require('../database/models/index.js');

module.exports = [
    check('phone')
    .isInt()
    .withMessage('Debe ingresar un numero de telefono válido'),

    check('dateOfBirth')
    .isDate()
    .withMessage('Debe ingresar una fecha válida'),

    body('genre').custom(value => value !== 'masculino' || value !== 'femenino' || value !== 'otro' ? false : true)
    .withMessage('Debe elegir un sexo válido'),

    check('address')
    .isAlphanumeric()
    .withMessage('Formato de dirección invalido'),

    check('country')
    .isAlpha()
    .withMessage('Debe elegir un país existente'),

    check('province')
    .isAlpha()
    .withMessage('Debe elegir una provincia existente'),

    check('city')
    .isAlpha()
    .withMessage('Debe elegir una ciudad existente')
]