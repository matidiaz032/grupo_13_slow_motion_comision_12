const users = require('../database/users');

module.exports = function (req,res,next) {
    if(!req.originalUrl.includes("profile")) return next();
    if(req.session.id === users.id && users.category === "ROL_USER" && !users.category === "ROL_ADMIN") return next();

    res.redirect('/users/login');
}