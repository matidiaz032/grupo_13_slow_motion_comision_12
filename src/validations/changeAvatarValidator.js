let { check, body } = require('express-validator');
const { User } = require('../database/models/index.js');

module.exports = [
    check('changeAvatar')
    .notEmpty()
    .withMessage('El formato de imagen seleccionado no es válido'),
];