const { check, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Esto es del back'),

    check('description')
    .notEmpty()
    .withMessage('Debe ingresar una descripcion'),

    check('seasons')
    .notEmpty()
    .withMessage('Debe ingresar una cantidad minima'),
    
    check('appreciation')
    .notEmpty()
    .isDecimal()
    .withMessage('Debe ingresar una calificacion valida del 0.0 al 10.0'),

    check('director')
    .notEmpty()
    .withMessage('Debe ingresar un director'),

    check('age')
    .notEmpty()
    .withMessage('Debe ingresar un director'),

    check('genre')
    .notEmpty()
    .withMessage('Debes seleccionar un genero'),

    check('idiom')
    .notEmpty()
    .withMessage('Debe seleccionar un idioma'),

    body('subtitle')
    .custom((value, {req}) => {
        if(value == 0) return false;
        return true
    })
    .withMessage('Debe seleccionar una opcion'),

    check('video')
    .notEmpty()
    .withMessage('Debe pegar la direccion web de un trailer de Youtube'),

    check('price')
    .notEmpty()
    .withMessage('Debe ingresar un valor'),

]