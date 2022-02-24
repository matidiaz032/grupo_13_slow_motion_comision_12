let { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models/index.js');

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes ingresar un email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    check('password')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('custom')
        .custom((value, {req}) => {
            return User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if(!bcrypt.compareSync(req.body.password, user.dataValues.password)) {
                    return Promise.reject()
                }
            })
            .catch(() => {
                return Promise.reject("Credenciales Invalidas")
            })
        })
];