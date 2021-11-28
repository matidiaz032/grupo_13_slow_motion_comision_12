let controller = {
    index: (req, res) => {
        res.render('./admin/adminMovies', {
            title: 'Admin - Page : Movie'
        })
    }
}

module.exports = controller