module.exports = function(req, res, next) {
    if (req.session.user && req.session.user.rol == 2 || req.session.user.rol == 3)
      return next();
    else
      res.redirect('/');
  }
