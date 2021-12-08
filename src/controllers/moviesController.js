const movies  = require('../database/movies')

let controller = {
    index: (req, res) => {
        res.render('./product/indexMovies', {
            title: 'Movies',
            movies
        })
    }
}

module.exports = controller