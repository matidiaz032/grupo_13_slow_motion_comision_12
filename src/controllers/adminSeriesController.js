let controller = {
    index: (req, res) => {
        res.render('adminSeries', {
            title: 'Admin - Page : Series'
        })
    }
}

module.exports = controller