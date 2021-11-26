let controller = {
    index: (req, res) => {
        res.render('motionUsers', {
            title: 'Admin - Page : Users'
        })
    }
}

module.exports = controller