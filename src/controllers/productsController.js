const { Movie, Serie, Genre, Price, Idiom, Rol , User } = require('../database/models/index.js');

let controller = {
    movies: (req, res) => {
        let genderFilter = []
        gender.forEach(gender => {
            movies.forEach(movie => {
                if(gender.id === movie.gender && !genderFilter.includes(gender)
                ) {
                    genderFilter.push(gender)
                }
            });
        })
        res.render('./product/indexMovies', {
            title: 'Movies',
            movies,
            genderFilter,
            session: req.session
        })
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
            //res.send(detailMovie)
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
            //res.send(detailSerie)
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