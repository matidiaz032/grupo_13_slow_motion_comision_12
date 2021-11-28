let controller = {
    index: (req, res) => {
        res.render('./admin/adminSeries', {
            title: 'Admin - Page : Series'
        })
    }
}

module.exports = controller