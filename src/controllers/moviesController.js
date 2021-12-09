const movies  = require('../database/movies')

let controller = {
    index: (req, res) => {
        res.render('./product/indexMovies', {
            title: 'Movies',
            movies
        })
    },
    detail: (req,res)=>{
        let id = +req.params.id;
        let detailProduct = products.find(product =>product.id ===id)
        res.render('detailProduct', {
            detailProduct
        })
    }
}

module.exports = controller