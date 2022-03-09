const { Movie, Serie, Genre, Price, Idiom, Rol , User } = require('../database/models/index.js');

const productVerify = (carrito, id) => {

    let index = -1;

    for (let i = 0; i < carrito.length; i++) {
        
        if(carrito[i].id === +id){
            index = i;
            break
        }
    }

    return index
}


module.exports = {
    show: async (req,res) => {
        if(!req.session.cart){
            return res.status(500).json({
                ok : false,
                msg : 'Comuníquese con el administrador!'
            })
        }

        return res.status(200).json({
            ok: true,
            meta : {
                total : req.session.cart.length
            },
            data : req.session.cart
        })
    },
    add: async (req, res) => {
        try {
            if(req.query.product === 'Movie') {
                let movie = await Movie.findByPk(req.params.id, {
                    include: {
                        model: Price
                    }
                })

                let { id, title, image, description } = movie;
                let productCart = {
                    id,
                    title,
                    image,
                    description,
                    Price: movie.Price,
                };
                if(!req.session.cart) {
                    req.session.cart = []
                }
                req.session.cart.push(productCart)

                return res.status(200).json({
                    ok: true,
                    meta : {
                        total : req.session.cart.length
                    },
                    data : req.session.cart
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}