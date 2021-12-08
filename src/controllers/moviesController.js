const peliculas  = require('../database/peliculas')
console.log(peliculas)

let controller = {
    index: (req, res) => {
        res.render('./product/indexMovies', {
            title: 'Movies',
            peliculas
        })
    }
}

module.exports = controller