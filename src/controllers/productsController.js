const { Op } = require('sequelize');
const { Movie, Serie, Genre, Price, Idiom } = require('../database/models/index.js');

let controller = {
    movies: async (req, res) => {
        if(req.query.genre) {
            try {
                let genre = await Genre.findOne({
                    where: {
                        name: req.query.genre
                    }
                })
                let allMovies = await Movie.findAll({
                    include: {
                        model: Genre
                    }
                })
                res.render('./product/oneGenreMovies', {
                    title: `Movies ${genre.name}`,
                    genre: genre.name,
                    movies: allMovies,
                    session: req.session
                }) 
            } catch (error) {
                res.send(error.message)
            }
        } else {
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
        }
    },
    series: async (req,res) => {
        if(req.query.genre) {
            let genre = await Genre.findOne({
                where: {
                    name: req.query.genre
                }
            })
            let allSeries = await Serie.findAll({
                include: {
                    model: Genre
                }
            })
            res.render('./product/oneGenreSeries', {
                title: `Series ${genre.name}`,
                genre: genre.name,
                series: allSeries,
                session: req.session
            })
        } else {
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
                title: 'Serie Detail',
                detailSerie,
                session: req.session
            })
        } catch (error) {
            res.send('No se encontró la seríe')
        }
    }, 
    cart: (req, res) => {
        res.render('./product/productCart', {
            title: 'Cart',
            session: req.session
        })
    },
    search: async (req, res) => {
        let allMovies = await Movie.findAll({
            where: {
                title: {
                    [Op.substring]: req.query.keywords
                }
            }
        })
        let allSeries = await Serie.findAll({
            where: {
                title: {
                    [Op.substring]: req.query.keywords
                }
            }
        })
        let all = [...allMovies, ...allSeries]

        res.render('./product/searchSuccess', { 
            title: 'Search Success',
            all,
            session: req.session
         })
    },
    premieres: async (req, res) => {
        try {
            let movies = await Movie.findAll()
            let series = await Serie.findAll()
            Date.prototype.toPremier = function() { return this.getFullYear() - 2 +"-"+(this.getMonth()+1)+"-"+this.getDate(); }
            let actual = new Date().toPremier()
            moviesPremier = movies.filter(elem => elem.age >= actual)
            seriesPremier = series.filter(elem => elem.age >= actual)
            res.render('./product/premieres', {
                title: 'Premieres',
                moviesPremier,
                seriesPremier,
                session: req.session
            })
            
        } catch (error) {
            res.send(error)
        }
    },
    ofers: async (req, res) => {
        try {
            let movies = await Movie.findAll({
                include: {
                    model: Price
                }
            })
            let series = await Serie.findAll({
                include: {
                    model: Price
                }
            })
            let ofersMovies = movies.filter(elem => elem.Price.discount >= 30)
            let ofersSeries = series.filter(element => element.Price.discount >= 30)
            res.render('./product/ofers', {
                title: 'ofers',
                ofersMovies,
                ofersSeries,
                session: req.session
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = controller