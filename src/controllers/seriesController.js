let controller = {
    index: (req, res) => {
        res.render('indexSeries', {
            title: 'Series'
        })
    }
}

module.exports = controller