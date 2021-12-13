const movies  = require('../database/movies');
const series = require('../database/series');
const gender = require('../database/genres')



let controller = {
    index: (req, res) => {
        let count = 1;
        let moviesSeries = [
            ...movies,
            ...series
        ];
        let moviesSeriesFilter = moviesSeries.filter(elem => {
            if(count <= 3 && elem.id % 2 === 0) {
                count++
                return elem
            }
        });
        let ofers = moviesSeries.filter(elem => {
            if(count <= 3 && elem.id % 2 !== 0) {
                count++
                return elem
            }
        });
        let movies3 = movies.filter(elem => {
            if(count <= 3) {
                count++
                return elem
            } else {
                count = 1
            }
        });
        let series3 = series.filter(elem => {
            if(count <= 3) {
                count++
                return elem
            } else {
                count = 1
            }
        });
        
        res.render('index', {
            title: 'SLOW MOTION',
            movies3,
            series3,
            moviesSeriesFilter,
            ofers
        })
    }
}

module.exports = controller