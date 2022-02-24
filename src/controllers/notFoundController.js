let controller = {
    index: (req, res) => {
        res.render('404', {
            title: 'Not found',
            session: req.session
        })
    }
}

module.exports = controller