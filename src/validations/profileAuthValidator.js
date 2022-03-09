const { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
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
        return User.findOne({
            where: {
                email: req.session.user.email
            }
        })
        .then(user => {
            if(!bcrypt.compareSync(req.body.actualPassword, user.dataValues.password)) {
                return Promise.reject()
            }
        })
        .catch(() => {
            return Promise.reject('La contraseña actual es incorrecta')
        })
    }),
]