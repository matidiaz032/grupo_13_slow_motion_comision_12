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
    serialMovie: (req,res)=>{
        let id = +req.params.id;
        let detailMovie = movies.find(movie =>movie.id ===id) 
        res.render('product/productDetail', {
            title: 'product Detail',
            detailMovie
        
        })
    },
    serialSerie: (req,res)=>{
        let id = +req.params.id;
        let detailSerie = series.find(serie =>serie.id ===id) 
        res.render('product/productDetail', {
            title: 'series Detail',
            detailSerie
            
         
        })
    }, 
    
    cart: (req, res) => {
        res.render('./product/productCart', {
            title: 'Cart'
        })
    }
}

module.exports = controller