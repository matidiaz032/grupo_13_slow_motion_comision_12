let controller = {
    index: (req, res) => {
        res.render('users/userProfile', {
            title: 'User Profile'
        })
    }
}

module.exports = controller