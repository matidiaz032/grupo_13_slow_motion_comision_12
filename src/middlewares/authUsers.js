module.exports = function(req, res, next) {
    if (req.session.user && req.session.user.rol)
        res.redirect('/');
    else
        return next();
  }