module.exports = function(req,res,next) {
    if(req.session && req.session.user.rol === "ROL_USER" || req.session && req.session.user.rol === "ROL_ADMIN")
    return next();

    else
        res.redirect('/users/register')
}