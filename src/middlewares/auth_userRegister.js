const userRegister = require('../database/users')

module.exports = function(req,res,next) {
    if(!req.session.id === users.id && !users.category === users.category) return next();

    res.redirect('/users/register')
}