const { Movie, Serie, Genre, Price, Idiom } = require('../database/models/index.js');

let controller = {
    movies: async (req, res) => {
        try {
            let genreMovies = await Promise.all([Genre.findAll(), Movie.findAll({
                include:{
                    model: Genre,
                },
            })])
            res.render('./product/indexMovies', {
                title: 'Movies',
                genres: genreMovies[0],
                movies: genreMovies[1],
                session: req.session
            })
        } catch (error) {
            res.send('No se encuentra los generos buscado')
        }
    },
    series: async (req,res) => {
        try {
            let genreSeries = await Promise.all([Genre.findAll(), Serie.findAll({
                include:{
                    model: Genre
                }
            })])
            res.render('./product/indexSeries', {
                title: 'series',
                genres: genreSeries[0],
                series: genreSeries[1],
                session: req.session
            })
        } catch (error) {
            res.send('No se encuentra los generos buscado')
        }
    },
    serialMovie: async (req,res)=>{
        try {
            await Promise.all([Genre.findAll(), Idiom.findAll()])
            let detailMovie = await Movie.findByPk(req.params.id, {
                include: [Price, {
                    model: Genre,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }, {
                    model: Idiom,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }],
            })
            res.render('product/productDetailMovie',{
                title: 'Movie Detail',
                detailMovie,
                session: req.session
            })
        } catch (error) {
            res.send('No se encontró una pelicula')
        }
    },
    serialSerie: async (req,res)=>{
        try {
            await Promise.all([Genre.findAll(), Idiom.findAll()])
            let detailSerie = await Serie.findByPk(req.params.id, {
                include: [Price, {
                    model: Genre,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }, {
                    model: Idiom,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }],
            })
            res.render('product/productDetailSerie',{
                title: 'Movie Detail',
                detailSerie,
                session: req.session
            })
        } catch (error) {
            res.send('No se encontró una pelicula')
        }
    }, 
    
    cart: (req, res) => {
        res.render('./product/productCart', {
            title: 'Cart',
            session: req.session
        })
    }
}

module.exports = controller