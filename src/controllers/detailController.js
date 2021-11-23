let controller = {
    index: (req, res) => {
        res.render('./product/productDetail', {
            title: 'Product Detail'
        })
    }
}

module.exports = controller