const fs = require("fs");
/* const path = require("path"); */
const { Op } = require('sequelize')
const { Movie, Serie, Genre, Price, Idiom, Rol , User } = require('../database/models/index.js'); //Requiere los modelos para poder usar directamente la variable
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

/* const moviesFilePath = path.join(__dirname, "../database/movies.json");
const seriesFilePath = path.join(__dirname, "../database/series.json");
const genresFilePath = path.join(__dirname, "../database/genres.json");
const movies = JSON.parse(fs.readFileSync(moviesFilePath, "utf-8"));
const series = JSON.parse(fs.readFileSync(seriesFilePath, "utf-8"));
const genres = JSON.parse(fs.readFileSync(genresFilePath, "utf-8"));
const writeJson = (path, db) => fs.writeFileSync(path, JSON.stringify(db),'utf-8'); */


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
    //    (lastMovieIdiom) => {
    //         if(movies.filter(movie => movie.idiom === "español")){
    //             for(lastMovieIdiom = 0; lastMovieIdiom<movies.length; lastMovieIdiom++){
    //                 lastMovieIdiom = idiom
    //             }
    //         }
    //     }
        /* let moviesIdiom = [
            idiom = 
            [
                "español",
                "ingles"
            ]
        ] ;
        let idiomSpain = moviesIdiom.map(movies => movies.idiom === "español");
        for(idiomSpain = 0; idiomSpain<=movies.length; idiomSpain++){
            return idiomSpain
        } */
        /* let spainLanguajes =  movies.forEach(movie => movie.idiom === req.params.idiom);
        for(let i; i <= movies.idiom.length; i++){
            return idiom
        } */
        /*spainLanguajes.forEach(idiom => {
            if(idiom === "español" && idiom == spainLanguajes){
                spainLanguajes = idiom
                spainLanguajes++
                return spainLanguajes
            }
        }) */
        // let idiom = movies.forEach(elementIdiom => {
        //     if(elementIdiom === movies.idiom && movies.idiom == "español"){
        //         idiom.filter(languajes => {
        //             if(languajes === "español"){
        //                 idiom = languajes
        //                 idiom++
        //                 return idiom
        //             }
        //         })
        //     }
        // })

        /*let idiom;
        if(idiom === movies.idiom){
            movies.forEach(elementIdiom => {
                if(elementIdiom.idiom == "español"){
                    elementIdiom++
                   return elementIdiom
                }
            })
        }*/
        res.render('./admin/adminStatistics', {
            title: 'Admin : Estadisticas',
            movies,
            series
        })
    },
    motionUsers: (req, res) => {
        User.findAll({
            where: {
                [Op.or]: [
                    {type: 0},
                    {type: 1}
                ]
            }
        }).then(data => {
            res.render('./admin/motionUsers', {
                title: 'Admin - Page : Users',
                allUsers: data
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
                res.redirect('/admin')
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
                res.redirect('/admin')
            } catch (error) {
                res.send('fallo la creacion de serie')
            }
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
            console.log('aca si llego')
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
            res.redirect('/admin')
        } catch (error) {
            res.send('no se modifico')
        }
    },
    editSuccessSerie: async (req, res) => {
        const { name, description, appreciation, seasons, age, director, genre, idiom, subtitle, video, price } = req.body;

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
            await Promise.all([serieSearch.addGenre(genreSearch), serieSearch.addIdiom(idiomSearch), priceCreate.addMovie(serieSearch)])
            res.redirect('/admin')
        } catch (error) {
            res.send('no se modifico')
        }
    },
    deleteProductMovie: async (req, res) => {
        try {
            let movieSearch = await Movie.findByPk(req.params.id)
            await Promise.all([movieSearch.removeGenres(await movieSearch.getGenres()), movieSearch.removeIdioms(await movieSearch.getIdioms(), movieSearch.removeUsers(await movieSearch.getUsers()))])
            fs.existsSync('./public/img/products-images/', movieSearch.image)
            ? fs.unlinkSync(`./public/img/products-images/${movieSearch.image}`)
            : console.log('No se encontró el archivo');
            await Movie.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.redirect('/admin/movies')  
        } catch (error) {
            res.send('No se pudo borrar la pelicula')
        }
    },
    deleteProductSerie: async (req, res) => {
        try {
            let serieSearch = await Serie.findByPk(req.params.id)
            await Promise.all([serieSearch.removeGenres(await serieSearch.getGenres()), serieSearch.removeIdioms(await serieSearch.getIdioms()), serieSearch.removeUsers(await serieSearch.getUsers())])
            fs.existsSync('./public/img/products-images/', serieSearch.image)
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
    agregaGeneros: async (req, res) => {
        const { gender } = req.body
        let [genreCreate] = await Genre.findOrCreate({
            where: {
                name: gender
            }
        })
        res.send(genreCreate)
    },
    /* agregaIdiomas: async (req, res) => {
        const {idiom} = req.body
        let [ idiomCreate] = await Idiom.findOrCreate({
            where: {
                name: idiom
            }
        })
        res.send(idiomCreate)
    },
    agregaUser: async (req, res) => {
        const {user} = req.body
        let [ rolCreate] = await Rol.findOrCreate({
            where: {
                type: user
            }
        })
        res.send(rolCreate)
    },
    consultas: async (req, res) => {
        let genresmovies = await moviegenre.findAll()
        res.send(genresmovies)
    } */
}

module.exports = controller