let controller = {
    index: (req, res) => {
        res.render('login', {
            title: 'Login'
        })
    }
}

module.exports = controller