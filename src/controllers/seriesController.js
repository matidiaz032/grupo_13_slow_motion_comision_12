let controller = {
    index: (req, res) => {
        res.render('indexSeries')
    },
    detail: (req, res) => {
        let id = req.params.id
        res.render('productDetail')
    }
}

module.exports = controller