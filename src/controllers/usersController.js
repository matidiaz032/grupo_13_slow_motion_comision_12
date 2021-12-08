let users = {
    login: (req, res) => {
        res.render('./users/login', {
            title: 'Login'
        })
    },
    register: (req, res) => {
        res.render('./users/register', {
            title: 'Register'
        })
    },
    profile: (req, res) => {
        res.render('users/userProfile', {
            title: 'User Profile'
        })
    }
}

module.exports = users;