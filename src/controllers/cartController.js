let controller = {
    index: (req, res) => {
        res.render('productCart', {
            title: 'Cart'
        })
    }
}

module.exports = controller