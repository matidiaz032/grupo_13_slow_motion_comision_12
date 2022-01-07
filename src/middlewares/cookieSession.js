function cookieSession (req, res, next) {
    if (req.cookies.userSlowMotion) {
        req.session.user = req.cookies.userSlowMotion;
        req.locals.user = req.session.user;
    }

    next();
}

module.exports = cookieSession;