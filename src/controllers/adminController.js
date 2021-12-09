const movies  = require('../database/movies');
const series = require('../database/series');

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
        const { name, description, movieSeries, gender, idiom, image, video, price } = req.body;
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
            description,
            image,
            gender,
            price,
            idiom
        }

        movies.push(newMovie)
        res.send(movies)
    },
    statistics: (req, res) => {
        res.render('./admin/adminStatistics', {
            title: 'Admin - Page : statistics'
        })
    }
}

module.exports = controller