const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator')

const deleteImageEdit = (req, element) => {
    if(req.file) {
        if(element.image !== 'default-avatar.jpg') {
            fs.unlinkSync(`./public/img/users-images/${element.image}`);
            return req.file.filename
        }
        return req.file.filename
    }
    return element.image
}

const usersFilePath = path.join(__dirname, "../database/users.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const writeJson = (path, db) => fs.writeFileSync(path, JSON.stringify(db),'utf-8');

let controller = {
    login: (req, res) => {
        res.render('./users/login', {
            title: 'Login',
            session: req.session
        })
    },
    register: (req, res) => {
        res.render('./users/register', {
            title: 'Register',
            session: req.session
        })
    },
    loadLogin: (req, res) => {
        const errors = validationResult(req)

        if(errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email);

            req.session.user = {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            res.locals.user = req.session.user;

            return res.redirect('/');

        } else {
            return res.render('./users/login', { 
                title: 'Login',
                errors: errors.mapped(),
                session: req.session
            });
        }

    },
    loadRegister: (req, res) => {
        const errors = validationResult(req)

        if(errors.isEmpty()) {
            const { name, lastName, userName, email, pass1} = req.body;
            let lastId = 0
            users.forEach(user => {
                if (user.id > lastId) {
                    lastId = user.id
                }
            });
    
            let newUser = {
                id: lastId + 1,
                name,
                lastName,
                userName,
                email: email.toLowerCase(), 
                pass: bcrypt.hashSync(pass1),
                rol: "ROL_ADMIN",
                avatar: req.file ? req.file.filename : "default-avatar.jpg",
                phone: '',
                dateOfBirth: '',
                gender: '',
                favorites: '',
                address: '',
                country: '',
                province: '',
                city: '',
            }
    
            users.push(newUser)
            writeJson(usersFilePath, users)
    
            res.redirect('/users/login')
        } else {
            let old = req.body;
            res.render('./users/register', {
                title: 'Register',
                errors: errors.mapped(),
                old,
                session: req.session
            })
        }

    },
    profile: (req, res) => {
        res.render('users/userProfile', {
            title: 'User Profile',
            session: req.session
        })
    }
}

module.exports = controller;