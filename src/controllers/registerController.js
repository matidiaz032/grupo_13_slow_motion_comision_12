let controller = {
    index: (req, res) => {
        res.render('register', {
            title: 'Register'
        })
    }
}

module.exports = controller