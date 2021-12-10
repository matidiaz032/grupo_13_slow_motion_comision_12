const fs = require("fs");
const path = require("path");

const moviesFilePath = path.join(__dirname, "../database/movies.json");
const movies = JSON.parse(fs.readFileSync(moviesFilePath, "utf-8"));
const writeJson = db => fs.writeFileSync(moviesFilePath, JSON.stringify(db),'utf-8');

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
            title: 'Admin - Page : Form'
        })
    },
    store: (req, res) => {
        const { name, description, duration, appreciation, age, director, movieSeries, gender, idiom, image, video, price } = req.body;
        let lastId = 1;
        let uploadType = movieSeries;

        if (uploadType === 'movie') {
            movies.forEach(movie => {
                if (movie.id == lastId) {
                    lastId = movie.id
                }
            });
        }

        let newMovie = {
            id: lastId + 1,
            title: name,
            trailer: video,
            duration,
            appreciation,
            age,
            director,
            description,
            image: 'default.jpg',
            gender,
            price,
            idiom
        }

        movies.push(newMovie)
        writeJson(movies)

        res.redirect('/admin')
    },
    statistics: (req, res) => {
        res.render('./admin/adminStatistics', {
            title: 'Admin - Page : statistics'
        })
    }
}

module.exports = controller