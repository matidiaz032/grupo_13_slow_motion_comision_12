let controller = {
    index: (req, res) => {
        res.render('./users/login', {
            title: 'Login'
        })
    }
}

module.exports = controller