const fs = require("fs");
const { Op } = require('sequelize')
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