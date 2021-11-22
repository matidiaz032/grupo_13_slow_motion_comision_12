let controller = {
    index: (req, res) => {
        res.render('productDetail', {
            title: 'Product Detail'
        })
    }
}

module.exports = controller