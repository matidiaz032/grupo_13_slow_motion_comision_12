let { check, body } = require('express-validator');
const path = require('path')
const fs = require('fs')
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

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
            let user = users.find(user => user.email == req.body.email);

            if(user && bcrypt.compareSync(req.body.password, user.pass)){
                return true
            }else{
                return false
            }

        }).withMessage('Credenciales inválidas')
];