const { Movie, Serie, Genre, Price, Idiom, Rol , User } = require('../database/models/index.js');

const productVerify = (cart, id, cond) => {

    if(cond === "Movie") {
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].id === +id && cart[i].duration){
                return cart[i]
            }
        };
    }
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].id === +id && cart[i].seasons){
            return cart[i]
        }
    };

    return false
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

                let exist = productVerify(req.session.cart, req.params.id, "Movie")

                if(!exist) {
                    let movie = await Movie.findByPk(req.params.id, {
                        include: {
                            model: Price
                        }
                    });
    
                    if(!movie) {
                        return res.status(500).json({
                            ok : false,
                            msg : 'Comuníquese con el administrador!'
                        })
                    };
    
                    let { id, title, image, description, duration } = movie;
                    let productCart = {
                        id,
                        title,
                        duration,
                        image,
                        description,
                        Price: movie.Price,
                        type: "buy"
                    };
                    req.session.cart.push(productCart);
                }

                return res.status(200).json({
                    ok: true,
                    meta : {
                        total : req.session.cart.length
                    },
                    data : req.session.cart
                }) 
            } else {

                let exist = productVerify(req.session.cart, req.params.id, "Serie")

                if(!exist) {
                    let serie = await Serie.findByPk(req.params.id, {
                        include: {
                            model: Price
                        }
                    })
    
                    if(!serie) {
                        return res.status(500).json({
                            ok : false,
                            msg : 'Comuníquese con el administrador!'
                        })
                    };
    
                    let { id, title, image, description, seasons } = serie;
                    let productCart = {
                        id,
                        title,
                        seasons,
                        image,
                        description,
                        Price: serie.Price,
                        type: "buy"
                    };
                    req.session.cart.push(productCart)
    
                }

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
    },
    editType: (req, res) => {
        try {
            if(req.query.product === 'Movie') {
                
                if(!req.session.cart) {
                    return res.status(500).json({
                        ok : false,
                        msg : 'Comuníquese con el administrador!'
                    })
                };

                req.session.cart.forEach(element => {
                    if(element.id == req.params.id && element.duration) {
                        element.type === "buy" ? element.type = "rental" : element.type = "buy"
                    }
                });

                return res.status(200).json({
                    ok: true,
                    meta : {
                        total : req.session.cart.length
                    },
                    data : req.session.cart
                })
            } else {
               
                if(!req.session.cart) {
                    return res.status(500).json({
                        ok : false,
                        msg : 'Comuníquese con el administrador!'
                    })
                };

                req.session.cart.forEach(element => {
                    if(element.id == req.params.id && element.seasons) {
                        element.type === "buy" ? element.type = "rental" : element.type = "buy"
                    }
                });

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
    },
    remove: (req, res) => {
        try {
            if(req.query.product === 'Movie') {
                let exist = productVerify(req.session.cart, req.params.id, "Movie")
                req.session.cart = req.session.cart.filter(elem => {
                    if(elem.duration && elem.id !== exist.id) {
                        return elem
                    } else if (elem.seasons) {
                        return elem
                    }
                })
                console.log(req.session.cart)
            } else {
                let exist = productVerify(req.session.cart, req.params.id, "Serie")
                req.session.cart = req.session.cart.filter(elem => {
                    if(elem.seasons && elem.id !== exist.id) {
                        return elem
                    } else if (elem.duration) {
                        return elem
                    }
                })
                console.log(req.session.cart)
            }
            return res.status(200).json({
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            })
        } catch (error) {
            
        }
    }
}