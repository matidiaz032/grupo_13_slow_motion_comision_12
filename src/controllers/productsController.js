const { Movie, Serie, Genre, Price, Idiom, Rol , User } = require('../database/models/index.js');

let controller = {
    movies: async (req, res) => {
        try {
            let genresId = await Promise.all([Genre.findAll(), Movie.findAll({include:{model:Genre}})])
            res.render('./product/indexMovies', {
                title: 'Movies',
                genres: genresId[0],
                movies: genresId[1],
                session: req.session
            })
        } catch (error) {
            res.send('No se encuentra los generos buscado')
        }
    },
    series: async (req,res) => {
        try {
            let genresId = await promise.all([Genre.findAll(), Serie.findAll({include:{model:Genre}})])
            re.render('./products/series', {
                title: 'series',
                genres: genresId[0],
                movies: genresId[1],
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