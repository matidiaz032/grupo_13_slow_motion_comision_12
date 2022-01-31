const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { validationResult } = require('express-validator')
const { User, Rol } = require('../database/models/index.js'); //Requiere los modelos para poder usar directamente la variable

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
            
            let user = users.find(user => user.email === req.body.email.toLowerCase());

            req.session.user = {
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol
            }

            if (req.body.recordarme) {
                const TIME_IN_MILISECONDS = 600000
                res.cookie('userSlowMotion', req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                });
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
    logOut: (req, res) => {
        req.session.destroy();
        /* if(req.cookies.slowMotion){
            res.cookie('slowMotion', "", { maxAge: -1 })
        } */
        res.redirect('/')
    },
    loadRegister: async (req, res) => {
        const errors = validationResult(req)
        /* if(errors.isEmpty()) {
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
                rol: "ROL_USER",
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
        } */

                /* Hecho con try catch, ver como se guardan */
        if(errors.isEmpty()) {
            const { name, lastName, userName, email, pass1} = req.body;
            try {
                let userCreate = await User.create({
                    first_name: name,
                    last_name: lastName,
                    user_name: userName,
                    email: email.toLowerCase(), 
                    password: bcrypt.hashSync(pass1),
                    avatar: req.file ? req.file.filename : "default-avatar.jpg",
                })
                let [rolCreate] = await Rol.findOrCreate({where: {type: 0}})
                await rolCreate.addUser(userCreate)
                res.redirect('/users/login')
            } catch (error) {
                res.send('user creado')
            }
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
    },
    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.userSlowMotion) {
            res.cookie('userSlowMotion', '', { maxAge: -1 })
        }
        res.redirect('/');
    }
}

module.exports = controller;