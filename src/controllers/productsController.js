const movies  = require('../database/movies');
const series = require('../database/series');
const gender = require('../database/genres')

let controller = {
    movies: (req, res) => {
        let genderFilter = gender.filter(gender => {
            movies.forEach(movie => {
                if(gender.name === movie.genre) {
                    return gender
                }
            });
        })
        /* res.send(genderFilter); */
        /* res.render('./product/indexMovies', {
            title: 'Movies',
            movies,
            gender
        }) */
    },
    series: (req, res) => {
        let genderFilter = gender.filter(gender => {
            series.forEach(serie => {
                if(gender.name === serie.genre) {
                    return gender
                }
            });
        })
        /* res.send(genderFilter); */
        /* res.render('./product/indexSeries', {
            title: 'Series',
            series,
            gender
        }) */
    },
    serialMovie: (req,res)=>{
        let id = +req.params.id;
        let detailMovie = movies.find(movie =>movie.id ===id) 
        let genre = gender.find(elem => elem.id === detailMovie.id)
        res.render('product/productDetailMovie', {
            title: 'Movie Detail',
            detailMovie,
            genre
        })
    },
    serialSerie: (req,res)=>{
        let id = +req.params.id;
        let detailSerie = series.find(serie =>serie.id ===id) 
        let genre = gender.find(elem => elem.id === detailSerie.id)
        res.render('product/productDetailSerie', {
            title: 'Serie Detail',
            detailSerie,
            genre
        })
    }, 
    
    cart: (req, res) => {
        res.render('./product/productCart', {
            title: 'Cart'
        })
    }
}

module.exports = controller