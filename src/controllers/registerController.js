let controller = {
    index: (req, res) => {
        res.render('./users/register', {
            title: 'Register'
        })
    }
}

module.exports = controller