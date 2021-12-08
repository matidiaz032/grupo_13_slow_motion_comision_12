const series = require('../database/series')

let controller = {
    index: (req, res) => {
        res.render('./product/indexSeries', {
            title: 'Series',
        })
    }
}

module.exports = controller