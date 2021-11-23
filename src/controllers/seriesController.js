let controller = {
    index: (req, res) => {
        res.render('./product/indexSeries', {
            title: 'Series'
        })
    }
}

module.exports = controller