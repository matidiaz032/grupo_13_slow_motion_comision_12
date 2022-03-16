const fs = require("fs");
const { Op, DataTypes } = require('sequelize')
const { validationResult } = require('express-validator')
const { Movie, Serie, Genre, Price, Idiom, Rol , User } = require('../database/models/index.js'); //Requiere los modelos para poder usar directamente la variable

let controller = {
    index: (req, res) => {
        res.render('./admin/administrator', {
            title: 'Admin - Page'
        })
    },
    movies: (req, res) => {
        Movie.findAll()
            .then(data => {
                res.render('./admin/adminMovies', {
                    title: 'Admin - Page : Movie',
                    movies: data,
                })
            })
    },
    series: (req, res) => {
        Serie.findAll()
            .then(data => {
                res.render('./admin/adminSeries', {
                    title: 'Admin - Page : Series',
                    series: data,
            })
        })
    },
    statistics: (req, res) => {
        let idioms = Idiom.findAll()
        // Idiom.findAll({
        //     include : [{association: 'Movie'}]
        // })
        let movies = Movie.findByPk(req.params.id,{
            include : [{association : 'Idiom'}]
        })
        .then(data =>{
            res.render('./admin/adminStatistics', {
                title: 'Admin : Estadisticas',
                idioms: data
                // movies: spainAdmin,
                // series: seriesAdmin,
                // idiom,
                //movies: data
                //series: data[1],
                // idiom: data[2]
            })
        })
    },
    motionUsers: (req, res) => {
        User.findAll({
            include : [{association: 'Rol'}]
        })
        .then(users =>{
            res.render('./admin/motionUsers', {
                title: 'Admin - Page : Users',
                users,
            })
        })
    },
    upload: (req, res) => {
        Promise.all([Genre.findAll(), Idiom.findAll()])
            .then(data => {
                res.render('./admin/uploadFiles', {
                    title: 'Admin - Page : Form',
                    genres: data[0],
                    idioms: data[1]
                })
            })
            .catch((error) => res.send('No cargaron idiomas y generos'))
    },
    store: async (req, res) => {
        const { name, description, duration, appreciation, seasons, age, director, movieSeries, genre, idiom, subtitle, video, price } = req.body;

        const errors = validationResult(req)

        console.log(req.body)
        
        if(errors.isEmpty()) {
            if (movieSeries === 'movie') {
                try {
                    let movieCreate = await Movie.create({
                        title: name,
                        description,
                        trailer: video.substr(video.indexOf('=') + 1),
                        duration: Number(duration),
                        rating: Number(appreciation),
                        age,
                        director,
                        subtitle,
                        image: req.file ? req.file.filename : 'default.png',
                    });
                    let genreIdiom = await Promise.all([Genre.findAll({
                            where: {
                                name: genre
                            }
                        }),
                        Idiom.findAll({
                            where: {
                                name: idiom
                            }
                        })
                    ])
                    let [priceCreate] = await Price.findOrCreate({
                            where: {
                                buy: price[0],
                                rental: price[1],
                                discount: price[2]
                            }
                    })
                    await Promise.all([movieCreate.addGenre(genreIdiom[0]), movieCreate.addIdiom(genreIdiom[1]), priceCreate.addMovie(movieCreate)])
                    res.redirect('/admin/movies')
                } catch (error) {
                    res.send('fallo la creacion de movie')
                }
            } else if(movieSeries === 'serie') {
                try {
                    let serieCreate = await Serie.create({
                        title: name,
                        description,
                        trailer: video.substr(video.indexOf('=') + 1),
                        seasons: Number(seasons),
                        rating: Number(appreciation),
                        age,
                        director,
                        subtitle,
                        image: req.file ? req.file.filename : 'default.png',
                    });
                    let genreIdiom = await Promise.all([Genre.findAll({
                            where: {
                                name: genre
                            }
                        }),
                    Idiom.findAll({
                            where: {
                                name: idiom
                            }
                        })
                    ])
                    let [priceCreate] = await Price.findOrCreate({
                            where: {
                                buy: price[0],
                                rental: price[1],
                                discount: price[2]
                            }
                    })
                    await Promise.all([serieCreate.addGenre(genreIdiom[0]), serieCreate.addIdiom(genreIdiom[1]), priceCreate.addSerie(serieCreate)])
                    res.redirect('/admin/series')
                } catch (error) {
                    res.send('fallo la creacion de serie')
                }
            }
        } else {
            Promise.all([Genre.findAll(), Idiom.findAll()])
            .then(data => {
                res.render('./admin/uploadFiles', {
                    title: 'Admin - Page : Form',
                    genres: data[0],
                    idioms: data[1],
                    old: req.body,
                    errors: errors.mapped(),
                    session: req.session
                })
            })
            .catch((error) => res.send('No cargaron idiomas y generos'))
        }
    },
    editMovie: async (req, res) => {
        try {
            let genreIdiom = await Promise.all([Genre.findAll(), Idiom.findAll()])
            let product = await Movie.findByPk(req.params.id, {
                include: [Price, {
                    model: Genre,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }, {
                    model: Idiom,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }],
            })
            res.render('./admin/adminEditMovie', {
                title: 'Edit',
                product,
                genres: genreIdiom[0],
                idioms: genreIdiom[1],
                session: req.session
            })
        } catch (error) {
            res.send('No se renderizo la pelicula buscada')
        }
    },
    editSerie: async (req, res) => {
        try {
            let genreIdiom = await Promise.all([Genre.findAll(), Idiom.findAll()])
            let product = await Serie.findByPk(req.params.id, {
                include: [Price, {
                    model: Genre,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }, {
                    model: Idiom,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }],
            })

            res.render('./admin/adminEditSerie', {
                title: 'Edit',
                product,
                genres: genreIdiom[0],
                idioms: genreIdiom[1],
                session: req.session
            })
        } catch (error) {
            res.send('No se renderizo la serie buscada')
        }
    },
    editSuccessMovie: async (req, res) => {
        const { name, description, duration, appreciation, age, director, genre, idiom, subtitle, video, price } = req.body;

        const errors = validationResult(req)

        try {
            let movieSearch = await Movie.findByPk(req.params.id)
            await Promise.all([movieSearch.removeGenres(await movieSearch.getGenres()), movieSearch.removeIdioms(await movieSearch.getIdioms())])
            let [priceCreate] = await Price.findOrCreate({
                where: {
                    buy: price[0],
                    rental: price[1],
                    discount: price[2]
                }
            })
            await Movie.update({
                title: name,
                description,
                trailer: video.substr(video.indexOf('=') + 1),
                duration: Number(duration),
                rating: Number(appreciation),
                age,
                director,
                subtitle,
                image: deleteImageEdit(req, movieSearch),
            },{
                where: {id: req.params.id}
            });
            let genreSearch = await Genre.findAll({
                where: {
                    name: genre
                }
            });
            let idiomSearch = await Idiom.findAll({
                where: {
                    name: idiom
                }
            })
            await Promise.all([movieSearch.addGenre(genreSearch), movieSearch.addIdiom(idiomSearch), priceCreate.addMovie(movieSearch)])
            if(errors.isEmpty()) {
                res.redirect('/admin')
            } else {
                let product = await Movie.findByPk(req.params.id, {
                    include: [Price, {
                        model: Genre,
                        attributes: ['name'],
                        through: {
                            attributes: [],
                        }
                    }, {
                        model: Idiom,
                        attributes: ['name'],
                        through: {
                            attributes: [],
                        }
                    }],
                })
                let genreIdiom = await Promise.all([Genre.findAll(), Idiom.findAll()])
                res.render('./admin/adminEditMovie', {
                    title: 'Edit',
                    product,
                    genres: genreIdiom[0],
                    idioms: genreIdiom[1],
                    errors,
                    session: req.session
                })
            }
        } catch (error) {
            res.send(error.message)
        }
    },
    editSuccessSerie: async (req, res) => {
        const { name, description, appreciation, seasons, age, director, genre, idiom, subtitle, video, price } = req.body;

        const errors = validationResult(req)

        try {
            let serieSearch = await Serie.findByPk(req.params.id)
            await Promise.all([serieSearch.removeGenres(await serieSearch.getGenres()), serieSearch.removeIdioms(await serieSearch.getIdioms())])
            let [priceCreate] = await Price.findOrCreate({
                where: {
                    buy: price[0],
                    rental: price[1],
                    discount: price[2]
                }
            })
            await Serie.update({
                title: name,
                description,
                trailer: video.substr(video.indexOf('=') + 1),
                seasons: Number(seasons),
                rating: Number(appreciation),
                age,
                director,
                subtitle,
                image: deleteImageEdit(req, serieSearch),
            },{
                where: {id: req.params.id}
            });
            let genreSearch = await Genre.findAll({
                where: {
                    name: genre
                }
            });
            let idiomSearch = await Idiom.findAll({
                where: {
                    name: idiom
                }
            })
            await Promise.all([serieSearch.addGenre(genreSearch), serieSearch.addIdiom(idiomSearch), priceCreate.addSerie(serieSearch)])
            if(errors.isEmpty()) {
                res.redirect('/admin')
            } else {
                let product = await Serie.findByPk(req.params.id, {
                    include: [Price, {
                        model: Genre,
                        attributes: ['name'],
                        through: {
                            attributes: [],
                        }
                    }, {
                        model: Idiom,
                        attributes: ['name'],
                        through: {
                            attributes: [],
                        }
                    }],
                })
                let genreIdiom = await Promise.all([Genre.findAll(), Idiom.findAll()])
                res.render('./admin/adminEditSerie', {
                    title: 'Edit',
                    product,
                    genres: genreIdiom[0],
                    idioms: genreIdiom[1],
                    errors,
                    session: req.session
                })
            }
        } catch (error) {
            res.send('no se modifico la serie')
        }
    },
    deleteProductMovie: async (req, res) => {
        try {
            let movieSearch = await Movie.findByPk(req.params.id)
            await Promise.all([movieSearch.removeGenres(await movieSearch.getGenres()), movieSearch.removeIdioms(await movieSearch.getIdioms(), movieSearch.removeUsers(await movieSearch.getUsers()))])
            fs.existsSync('./public/img/products-images/', movieSearch.image) && movieSearch.image !== 'default.png'
            ? fs.unlinkSync(`./public/img/products-images/${movieSearch.image}`)
            : console.log('No se encontró el archivo');
            await Movie.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/admin/movies')  
        } catch (error) {
            res.send(error.message)
        }
    },
    deleteProductSerie: async (req, res) => {
        try {
            let serieSearch = await Serie.findByPk(req.params.id)
            await Promise.all([serieSearch.removeGenres(await serieSearch.getGenres()), serieSearch.removeIdioms(await serieSearch.getIdioms()), serieSearch.removeUsers(await serieSearch.getUsers())])
            fs.existsSync('./public/img/products-images/', serieSearch.image) && serieSearch.image !== 'default.png'
            ? fs.unlinkSync(`./public/img/products-images/${serieSearch.image}`)
            : console.log('No se encontró el archivo');
            await Serie.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/admin/series')  
        } catch (error) {
            res.send('No se pudo borrar la pelicula')
        }
    },
}

const deleteImageEdit = (req, element) => {
    if(req.file) {
        if(element.image !== 'default.png') {
            fs.unlinkSync(`./public/img/products-images/${element.image}`);
            return req.file.filename
        }
        return req.file.filename
    }
    return element.image
}

module.exports = controller