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
            title: 'Admin - Page : Movie'
        })
    },
    series: (req, res) => {
        res.render('./admin/adminSeries', {
            title: 'Admin - Page : Series'
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
    store: (req, res) => {
        const { name, description, duration, appreciation, age, director, movieSeries, gender, idiom, image, video, price } = req.body;
        let lastId = 1;
        let uploadType = movieSeries;

        if (uploadType === 'movie') {
            movies.forEach(movie => {
                if (movie.id > lastId) {
                    lastId = movie.id
                }
            });

            let newMovie = {
                id: +lastId + 1,
                title: name,
                description,
                trailer: video,
                duration,
                appreciation,
                age,
                director,
                idiom,
                image: 'default.jpg',
                gender: +gender,
                price: {
                    buy: +price[0],
                    rental: +price[1]
                }
            }
    
            movies.push(newMovie)
            writeJson(moviesFilePath, movies)
        }

        res.redirect('/admin')
    },
    statistics: (req, res) => {
        res.render('./admin/adminStatistics', {
            title: 'Admin - Page : statistics'
        })
    },
    editMovie: (req, res) => {
        let product = movies.find(elem => elem.id === Number(req.params.id))
        res.render('./admin/adminEditMovie', {
            title: 'Edit',
            product,
            genres
        })
    },
    editSerie: (req, res) => {

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

    }
}

module.exports = controller