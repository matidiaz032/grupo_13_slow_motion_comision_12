const movies  = require('../database/movies');
const series = require('../database/series');

let controller = {
    movies: (req, res) => {
        res.render('./product/indexMovies', {
            title: 'Movies',
            movies
        })
    },
    series: (req, res) => {
        res.render('./product/indexSeries', {
            title: 'Series',
            series
        })
    },
    detail: (req,res)=>{
        let id = +req.params.id;
        /* let detailProduct = products.find(product =>product.id ===id) */
        res.render('product/productDetail', {
            title: 'Product Detail'
            /* detailProduct */
        })
    },
    cart: (req, res) => {
        res.render('./product/productCart', {
            title: 'Cart'
        })
    }
}

module.exports = controller