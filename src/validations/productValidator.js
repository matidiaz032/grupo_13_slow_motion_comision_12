const { check, body} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Esto es del back'),

    check('description')
    .notEmpty()
    .withMessage('Debe ingresar una descripcion'),

    
    body('movieSeries')
    .custom((value, {req}) => {
        if(value == 'movie') { 
            if(req.body.duration.length >= 1) return true
        } else if(value == 'serie') {
            if(req.body.seasons.length >= 1) return true
        }
        return false
    })
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
    .withMessage('Debes seleccionar minimo un genero'),

    check('idiom')
    .notEmpty()
    .withMessage('Debe seleccionar minimo un idioma'),

    body('subtitle')
    .custom((value, {req}) => {
        if(value == 0) return false;
        return true
    })
    .withMessage('Debe seleccionar una opcion'),

    /* check('productImage')
    .notEmpty()
    .withMessage('Debe subir una imagen de portada'), */

    check('video')
    .notEmpty()
    .withMessage('Debe pegar la direccion web de un trailer de Youtube'),

    check('price')
    .notEmpty()
    .withMessage('Debe ingresar un valor valido'),

]