let controller = {
    index: (req, res) => {
        res.render('adminUser', {
            title: 'Admin - Page'
        })
    }
}

module.exports = controller