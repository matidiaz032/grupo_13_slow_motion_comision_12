const { Movie, Serie, Genre, Price, Idiom, Rol , User, Cart } = require('../database/models/index.js');

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


                    let cart = await Cart.findAll({
                        where: {
                            UserId: req.session.user.id
                        }
                    })
                    await cart[0].addMovie(movie)
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
                    

                    let cart = await Cart.findAll({
                        where: {
                            UserId: req.session.user.id
                        }
                    })
                    await cart[0].addSerie(serie)
    
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
    editType: async (req, res) => {
        try {
            if(req.query.product === 'Movie') {
                
                if(!req.session.cart) {
                    return res.status(500).json({
                        ok : false,
                        msg : 'Comuníquese con el administrador!'
                    })
                };

                let movie = await Movie.findByPk(req.params.id)
                let cartDB = await Cart.findAll({
                    where: {
                        UserId: req.session.user.id
                    }
                })

                req.session.cart.forEach(async element => {
                    if(element.id == req.params.id && element.duration) {
                        if(element.type === "buy") {
                            element.type = "rental"
                            await cartDB[0].removeMovies(movie)
                            await cartDB[1].addMovies(movie)
                        } else {
                            element.type = "buy"
                            await cartDB[1].removeMovies(movie)
                            await cartDB[0].addMovies(movie)
                        }
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


                let serie = await Serie.findByPk(req.params.id)
                let cartDB = await Cart.findAll({
                    where: {
                        UserId: req.session.user.id
                    }
                })

                req.session.cart.forEach( async element => {
                    if(element.id == req.params.id && element.seasons) {
                        if(element.type === "buy") {
                            element.type = "rental"
                            await cartDB[0].removeSeries(serie)
                            await cartDB[1].addSeries(serie)
                        } else {
                            element.type = "buy"
                            await cartDB[1].removeSeries(serie)
                            await cartDB[0].addSeries(serie)
                        }
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
    remove: async (req, res) => {
        try {
            console.log(req.session.cart)
            if(req.query.product === 'Movie') {
                let exist = productVerify(req.session.cart, req.params.id, "Movie")
                req.session.cart = req.session.cart.filter(elem => {
                    if(elem.duration && elem.id !== exist.id) {
                        return elem
                    } else if (elem.seasons) {
                        return elem
                    }
                })
                let cartDB = await Cart.findAll({
                    where: {
                        userId: req.session.user.id
                    }
                })
                let movieDelete = await Movie.findByPk(req.params.id)
                await cartDB[0].removeMovies(movieDelete)
                await cartDB[1].removeMovies(movieDelete)
            } else {
                let exist = productVerify(req.session.cart, req.params.id, "Serie")
                req.session.cart = req.session.cart.filter(elem => {
                    if(elem.seasons && elem.id !== exist.id) {
                        return elem
                    } else if (elem.duration) {
                        return elem
                    }
                })
                let cartDB = await Cart.findAll({
                    where: {
                        userId: req.session.user.id
                    }
                })
                let serieDelete = await Serie.findByPk(req.params.id)
                await cartDB[0].removeSeries(serieDelete)
                await cartDB[1].removeSeries(serieDelete)
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