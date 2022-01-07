const movies  = require('../database/movies');
const series = require('../database/series');
const gender = require('../database/genres')



let controller = {
    index: (req, res) => {
        let countOfers = 1;
        let countPopular = 1;
        let moviesSeries = [
            ...movies,
            ...series
        ];
        let ofers = moviesSeries.filter(elem => {
            if(countOfers <= 10 && elem.id % 2 === 0) {
                countOfers++
                return elem
            }
        });
        let popular = moviesSeries.filter(elem => {
            if(countPopular <= 10 && elem.id % 2 !== 0) {
                countPopular++
                return elem
            }
        });
        let movies3 = movies.filter(elem => {
            if(elem.id <= 10) {
                return elem
            }
        });
        let series3 = series.filter(elem => {
            if(elem.id <= 10) {
                return elem
            }
        });
        res.render('index', {
            title: 'SLOW MOTION',
            movies3,
            series3,
            popular,
            ofers,
            session: req.session
        })
    },
    faq: (req,res)=>{
        res.render("faq",{
            title: "Ayuda",
            session: req.session
        })
    }
}

module.exports = controller