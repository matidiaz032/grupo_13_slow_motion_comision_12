let controller = {
    index: (req, res) => {
        res.render('administrator', {
            title: 'Admin - Page'
        })
    }
}

module.exports = controller