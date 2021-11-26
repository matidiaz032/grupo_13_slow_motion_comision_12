let controller = {
    index: (req, res) => {
        res.render('adminMovies', {
            title: 'Admin - Page : Movie'
        })
    }
}

module.exports = controller