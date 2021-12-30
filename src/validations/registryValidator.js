const { check, body } = require('express-validator');
const path = require('path')
const fs = require('fs')
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


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
        if(users.find(user=>{ 
            return user.email == value 
        })) {
            return false
        };
        return true
    }).withMessage('Email asociado con otra cuenta'),

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

    /* check('terms')
    .isString('on')
    .withMessage('Debes aceptar las bases y condiciones') */
]