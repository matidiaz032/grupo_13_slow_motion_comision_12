const { check, body } = require('express-validator');
const { User } = require('../database/models/index.js');

module.exports = [
    check('phone')
    .isInt()
    .withMessage('Debe ingresar un numero de telefono válido'),

    check('dateOfBirth')
    .isDate()
    .withMessage('Debe ingresar una fecha válida'),

    check('genre')
    .isIn(['masculino', 'femenino', 'otro'])
    .withMessage('Debe seleccionar un dato del listado'),

    check('address')
    .isString()
    .withMessage('Formato de dirección invalido'),

    check('country')
    .isString()
    .withMessage('Debe elegir un país existente'),

    check('province')
    .isString()
    .withMessage('Debe elegir una provincia existente'),

    check('city')
    .isString()
    .withMessage('Debe elegir una ciudad existente')
]