const fs = require("fs");
const path = require("path");

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

    // uploadSeries: (req, res) => {
    //     res.render('./admin/uploadFileSeries', {
    //         title: 'Admin - Page : Form Series',
    //     })
    // },
    store: (req, res) => {
        const { name, description, duration, appreciation, seasons, age, director, movieSeries, gender, idiom, subtitle, image, video, price } = req.body;
        let lastId = 1;
        let uploadType = movieSeries;

        if (uploadType === 'movie') {
            
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
                trailer: video,
                duration,
                appreciation,
                seasons: +seasons,
                age,
                director,
                idiom,
                subtitle,
                image: 'default.jpg',
                gender: +gender,
                price: {
                    buy: +price[0],
                    rental: +price[1]
                }
            }
    
            series.push(newSerie)
            writeJson(seriesFilePath, series)
        }
        
        res.redirect('/admin')
    
    },
    // storeSeries: (req, res) => {
    //     const { title, seasons, video, description, image, genres, price, idiom, age, director, uploadProduct} = req.body;
    //     let lastId = 1;
    //     let uploadType = uploadProduct;

    //     if (uploadType === "series") {
    //         series.forEach(serie => {
    //             if (serie.id > lastId) {
    //                 lastId = serie.id
    //             }
    //         });

    //         let newSerie = {
    //             id: +lastId + 1,
    //             title,
    //             seasons,
    //             trailer: video,
    //             description,
    //             image: 'default.png',
    //             genres,
    //             price: {
    //                 buy: +price[0],
    //                 rental: +price[1]
    //             }
    //         }

    //         series.push(newSerie)
    //         writeJson(seriesFilePath, series)
    //         res.redirect('/admin/series')
    //     }
    // },
    editMovie: (req, res) => {
        let product = movies.find(elem => elem.id === Number(req.params.id))
        res.render('./admin/adminEditMovie', {
            title: 'Edit',
            product,
            genres
        })
    },
    editSerie: (req, res) => {
        let product = series.find(elem => elem.id === Number(req.params.id))
        res.render('./admin/adminEditSerie', {
            title: 'Edit',
            product,
            genres
        })
    },
    editSuccessMovie: (req, res) => {
        const { name, description, duration, appreciation, age, director, movieSeries, gender, idiom, image, video, price } = req.body;

        movies.forEach(element => {
            if(element.id === Number(req.params.id)){
                element.id = element.id,
                element.title = name,
                element.description = description,
                element.trailer = video,
                element.duration = duration,
                element.appreciation = appreciation,
                element.age = age,
                element.director = director,
                element.idiom = idiom,
                element.image = 'default.jpg',
                element.gender = Number(gender)
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

    },
    deleteProduct: (req, res) => {
        let idMovie = +req.params.id;

        movies.forEach(movie => {
            if(movie.id === idMovie){
                let deleteMovie = movies.indexOf(movie)
                movies.splice(deleteMovie, 1)
            }
        })

        writeJson(moviesFilePath, movies)
        res.redirect('/admin/movies')
    }
}

module.exports = controller