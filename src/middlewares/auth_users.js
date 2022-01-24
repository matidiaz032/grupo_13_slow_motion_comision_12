module.exports = function(req,res,next) {
    if (req.session.user && req.session.user.rol === "ROL_USER")
    return next();

    else if(req.session.user && req.session.user.rol === "ROL_ADMIN")
    return next();

    else
    res.redirect('/users/register');
}