const { Movie, Serie, Price, Genre } = require('../database/models/index.js'); //Requiere los modelos para poder usar directamente la variable

let controller = {
    index: async (req, res) => {
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
            let popular = allMovieSerie.filter(elem => elem.rating > 7)
            res.render('index', {
                title: 'SLOW MOTION',
                movies3: allMovies,
                series3: allSeries,
                popular,
                genres,
                ofers: allMovieSerie,
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