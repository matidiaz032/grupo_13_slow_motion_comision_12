const movies  = require('../database/movies');
const series = require('../database/series');
const gender = require('../database/genres')
const { User, Rol, Movie, Genre } = require('../database/models/index.js');

let controller = {
    movies: async (req, res) => {
        try {
            let allGenres = await Genre.findAll()

            let allMovies = await Movie.findAll({
                include: {
                    model: Genre
                }
            })
            console.log(allMovies[0].dataValues.Genres)
            res.render('./product/indexMovies', {
                title: 'Movies',
                movies: allMovies,
                genderFilter: allGenres,
                session: req.session
            })
        } catch (error) {
            console.log(error.message)
        }

    },
    series: (req, res) => {
        let genderFilter = []
        gender.forEach(gender => {
            series.forEach(serie => {
                if(gender.id === serie.gender && !genderFilter.includes(gender)
                ) {
                    genderFilter.push(gender)
                }
            });
        })
        
        res.render('./product/indexSeries', {
            title: 'Series',
            series,
            genderFilter,
            session: req.session
        })
    },
    serialMovie: (req,res)=>{
        let id = +req.params.id;
        let detailMovie = movies.find(movie =>movie.id ===id) 
        let genre = gender.find(elem => elem.id === detailMovie.id)
        res.render('product/productDetailMovie', {
            title: 'Movie Detail',
            detailMovie,
            genre,
            session: req.session
        })
    },
    serialSerie: (req,res)=>{
        let id = +req.params.id;
        let detailSerie = series.find(serie =>serie.id ===id) 
        let genre = gender.find(elem => elem.id === detailSerie.id)
        res.render('product/productDetailSerie', {
            title: 'Serie Detail',
            detailSerie,
            genre,
            session: req.session
        })
    }, 
    
    cart: (req, res) => {
        res.render('./product/productCart', {
            title: 'Cart',
            session: req.session
        })
    }
}

module.exports = controller