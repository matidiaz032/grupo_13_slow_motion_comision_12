const peliculas  = require('../database/peliculas');
const series = require('../database/series');

let controller = {
    movies: (req, res) => {
        res.render('./product/indexMovies', {
            title: 'Movies',
            peliculas
        })
    },
    series: (req, res) => {
        res.render('./product/indexSeries', {
            title: 'Series',
            series
        })
    },
    detail: (req, res) => {
        res.render('./product/productDetail', {
            title: 'Product Detail'
        })
    },
    cart: (req, res) => {
        res.render('./product/productCart', {
            title: 'Cart'
        })
    }
}

module.exports = controller