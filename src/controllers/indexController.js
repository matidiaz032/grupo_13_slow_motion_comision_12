const { Movie, Serie, Price, Genre } = require('../database/models/index.js'); //Requiere los modelos para poder usar directamente la variable

let controller = {
    index: async (req, res) => {
        
        if(!req.session.cart) {
            req.session.cart = []
        }

        try {
            let allMovies = await Movie.findAll({
                include: {
                    model: Price
                },
                limit: 8
            })
            let allSeries = await Serie.findAll({
                include: {
                    model: Price
                },
                limit: 8
            })
            let genres = await Genre.findAll()
            let allMovieSerie = [...allMovies, ...allSeries]
            let popular = allMovieSerie.filter(elem => elem.rating > 5)
            let ofers = allMovieSerie.filter(elem => elem.Price.discount > 5)
            res.render('index', {
                title: 'SLOW MOTION',
                movies3: allMovies,
                series3: allSeries,
                popular: popular.slice(0,8),
                genres,
                ofers: ofers.slice(0,8),
                session: req.session
            })
        } catch (error) {
            console.log(error.message)
        }
    },
    faq: (req,res)=>{
        res.render("./faq", {
            title: "Slow Motion : Ayuda",
            session: req.session
        })
    }
}

module.exports = controller