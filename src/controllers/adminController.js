const fs = require("fs");
const path = require("path");
const { Movie, Serie, Genre, Price } = require('../database/models/index.js'); //Requiere los modelos para poder usar directamente la variable
const deleteImageEdit = (req, element) => {
    if(req.file) {
        if(element.image !== 'default.png') {
            fs.unlinkSync(`./public/img/products-images/${element.image}`);
            return req.file.filename
        }
        return req.file.filename
    }
    return element.image
}

const moviesFilePath = path.join(__dirname, "../database/movies.json");
const seriesFilePath = path.join(__dirname, "../database/series.json");
const genresFilePath = path.join(__dirname, "../database/genres.json");
const movies = JSON.parse(fs.readFileSync(moviesFilePath, "utf-8"));
const series = JSON.parse(fs.readFileSync(seriesFilePath, "utf-8"));
const genres = JSON.parse(fs.readFileSync(genresFilePath, "utf-8"));
const writeJson = (path, db) => fs.writeFileSync(path, JSON.stringify(db),'utf-8');


let controller = {
    index: (req, res) => {
        res.render('./admin/administrator', {
            title: 'Admin - Page'
        })
    },
    movies: (req, res) => {
        res.render('./admin/adminMovies', {
            title: 'Admin - Page : Movie',
            movies: movies,
            mov: function (lastMovieId) {
            return movies.filter(movie => movie.id === lastMovieId)
            }
        })
    },
    series: (req, res) => {
        res.render('./admin/adminSeries', {
            title: 'Admin - Page : Series',
            series: series,
            ser: function (lastSeriesId) {
            return series.filter(series => series.id === lastSeriesId)
            }
        })
    },
    statistics: (req, res) => {
    //    (lastMovieIdiom) => {
    //         if(movies.filter(movie => movie.idiom === "español")){
    //             for(lastMovieIdiom = 0; lastMovieIdiom<movies.length; lastMovieIdiom++){
    //                 lastMovieIdiom = idiom
    //             }
    //         }
    //     }
        /* let moviesIdiom = [
            idiom = 
            [
                "español",
                "ingles"
            ]
        ] ;
        let idiomSpain = moviesIdiom.map(movies => movies.idiom === "español");
        for(idiomSpain = 0; idiomSpain<=movies.length; idiomSpain++){
            return idiomSpain
        } */
        /* let spainLanguajes =  movies.forEach(movie => movie.idiom === req.params.idiom);
        for(let i; i <= movies.idiom.length; i++){
            return idiom
        } */
        /*spainLanguajes.forEach(idiom => {
            if(idiom === "español" && idiom == spainLanguajes){
                spainLanguajes = idiom
                spainLanguajes++
                return spainLanguajes
            }
        }) */
        // let idiom = movies.forEach(elementIdiom => {
        //     if(elementIdiom === movies.idiom && movies.idiom == "español"){
        //         idiom.filter(languajes => {
        //             if(languajes === "español"){
        //                 idiom = languajes
        //                 idiom++
        //                 return idiom
        //             }
        //         })
        //     }
        // })

        /*let idiom;
        if(idiom === movies.idiom){
            movies.forEach(elementIdiom => {
                if(elementIdiom.idiom == "español"){
                    elementIdiom++
                   return elementIdiom
                }
            })
        }*/
        res.render('./admin/adminStatistics', {
            title: 'Admin : Estadisticas',
            movies,
            series
        })
    },
    motionUsers: (req, res) => {
        res.render('./admin/motionUsers', {
            title: 'Admin - Page : Users'
        })
    },
    upload: (req, res) => {

        res.render('./admin/uploadFiles', {
            title: 'Admin - Page : Form',
            genres
        })
    },

    store: async (req, res) => {
        const { name, description, duration, appreciation, seasons, age, director, movieSeries, gender, idiom, subtitle, video, price } = req.body;
        let lastId = 1;
        let uploadType = movieSeries;

        /* if (uploadType === 'movie') {
            movies.forEach(movie => {
                if (movie.id > lastId) {
                    lastId = movie.id
                }
            });

            let newMovie = {
                id: +lastId + 1,
                title: name,
                description,
                trailer: video.substr(video.indexOf('=') + 1),
                duration,
                appreciation,
                age,
                director,
                idiom,
                subtitle,
                image: req.file ? req.file.filename : 'default.png',
                gender: +gender,
                price: {
                    buy: +price[0],
                    rental: +price[1]
                }
            }
    
            movies.push(newMovie)
            writeJson(moviesFilePath, movies)
        } else if(uploadType === 'serie') {
            series.forEach(series => {
                if (series.id > lastId) {
                    lastId = series.id
                }
            });

            let newSerie = {
                id: +lastId + 1,
                title: name,
                description,
                trailer: video.substr(video.indexOf('=') + 1),
                appreciation,
                seasons: +seasons,
                age,
                director,
                idiom,
                subtitle,
                image: req.file ? req.file.filename : 'default.png',
                gender: +gender,
                price: {
                    buy: +price[0],
                    rental: +price[1]
                }
            }
    
            series.push(newSerie)
            writeJson(seriesFilePath, series)
        }
        
        res.redirect('/admin') */
    



                /* Hecho con try catch, ver como se guardan aqui*/

        if (uploadType === 'movie') {
            try {
                let movieCreate = await Movie.create({
                    title: name,
                    description,
                    trailer: video.substr(video.indexOf('=') + 1),
                    duration: Number(duration),
                    rating: Number(appreciation),
                    age,
                    director,
                    idiom,
                    subtitle,
                    image: req.file ? req.file.filename : 'default.png',
                });
                let [genreCreate] = await Genre.findOrCreate({
                    where: {
                        name: gender
                    }
                });
                let [priceCreate] = await Price.findOrCreate({
                        where: {
                            buy: price[0],
                            rental: price[1],
                            discount: price[2]
                        }
                })
                await movieCreate.addGenre(genreCreate)
                await priceCreate.addMovie(movieCreate)
                res.redirect('/admin')
            } catch (error) {
                res.send('fallo la creacion de movie')
            }
        } else if(uploadType === 'serie') {
            try {
                let serieCreate = await Serie.create({
                    title: name,
                    description,
                    trailer: video.substr(video.indexOf('=') + 1),
                    seasons: Number(seasons),
                    rating: Number(appreciation),
                    age,
                    director,
                    idiom,
                    subtitle,
                    image: req.file ? req.file.filename : 'default.png',
                });
                let [genreCreate] = await Genre.findOrCreate({
                    where: {
                        name: gender
                    }
                });
                let [priceCreate] = await Price.findOrCreate({
                        where: {
                            buy: price[0],
                            rental: price[1],
                            discount: price[2]
                        }
                })
                await serieCreate.addGenre(genreCreate)
                await priceCreate.addMovie(serieCreate)
                res.redirect('/admin')
            } catch (error) {
                res.send('fallo la creacion de serie')
            }
        }
    },
    
    editMovie: (req, res) => {
        let product = movies.find(elem => elem.id === Number(req.params.id))
        res.render('./admin/adminEditMovie', {
            title: 'Edit',
            product,
            genres,
            session: req.session
        })
    },
    editSerie: (req, res) => {
        let product = series.find(elem => elem.id === Number(req.params.id))
        res.render('./admin/adminEditSerie', {
            title: 'Edit',
            product,
            genres,
            session: req.session
        })
    },
    editSuccessMovie: (req, res) => {
        const { name, description, duration, appreciation, age, director, gender, idiom, subtitle, video, price } = req.body;
        movies.forEach(element => {
            if(element.id === Number(req.params.id)){
                element.id = element.id,
                element.title = name,
                element.description = description,
                element.trailer = video.substr(video.indexOf('=') + 1),
                element.duration = duration,
                element.appreciation = appreciation,
                element.age = age,
                element.director = director,
                element.idiom = idiom,
                element.subtitle = subtitle,
                element.image = deleteImageEdit(req, element),
                element.gender = Number(gender),
                element.price = {
                    buy: +price[0],
                    rental: +price[1]
                }
            }
        })

        writeJson(moviesFilePath, movies)

        res.redirect('/admin')
    },
    editSuccessSerie: (req, res) => {
        const { name, description, appreciation, seasons, age, director, gender, idiom, subtitle, video, price } = req.body;

        series.forEach(element => {
            if(element.id === Number(req.params.id)){
                element.id = element.id,
                element.title = name,
                element.description = description,
                element.trailer = video.substr(video.indexOf('=') + 1),
                element.seasons = +seasons
                element.appreciation = appreciation,
                element.age = age,
                element.director = director,
                element.idiom = idiom,
                element.subtitle = subtitle,
                element.image = deleteImageEdit(req, element),
                element.gender = Number(gender)
                element.price = {
                    buy: +price[0],
                    rental: +price[1]
                }
            }
        })

        writeJson(seriesFilePath, series)

        res.redirect('/admin')
    },
    deleteProductMovie: (req, res) => {
        let idMovie = +req.params.id;
        movies.forEach(movie => {
            if(movie.id === idMovie){
                let deleteMovie = movies.indexOf(movie);
                movies.splice(deleteMovie, 1)
            }
        })

        writeJson(moviesFilePath, movies)
        res.redirect('/admin/movies')
    },
    deleteProductSerie: (req, res) => {
        let idSerie = +req.params.id;
        series.forEach(serie => {
            if(serie.id === idSerie){
                let deleteSerie = series.indexOf(serie)
                series.splice(deleteSerie, 1)
            }
        })

        writeJson(seriesFilePath, series)
        res.redirect('/admin/series')
    }
}

module.exports = controller