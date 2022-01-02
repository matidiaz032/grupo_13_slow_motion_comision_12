const users = require('../database/users');

module.exports = function(req,res,next) {
    if(!req.originalUrl.includes('admin')) return next();
    if(req.session.id === users.id && users.category === "ROL_ADMIN" && !users.category === "ROL_USER") return next();

    res.redirect('/users/login');
}