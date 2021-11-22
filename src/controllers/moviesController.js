let controller = {
    index: (req, res) => {
        res.render('indexMovies', {
            title: 'Movies'
        })
    }
}

module.exports = controller