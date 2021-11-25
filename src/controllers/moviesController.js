let controller = {
    index: (req, res) => {
        res.render('./product/indexMovies', {
            title: 'Movies'
        })
    }
}

module.exports = controller