'use strict';

const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": "mysql"
});

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize);
});




const { Genre, Movie, Serie, Price, User, Card, Rol, Idiom, Cart, Order } = sequelize.models   //Desestructura todos los modelos para poder usarlos

/*   Aqui comienzan todas las conecciones(asociaciones) */

Price.hasMany(Movie)         
Movie.belongsTo(Price)
Price.hasMany(Serie)
Serie.belongsTo(Price)

/* Idiomas de peliculas */
Idiom.belongsToMany(Movie, {through: 'movieidiom', timestamps: false})
Movie.belongsToMany(Idiom, {through: 'movieidiom', timestamps: false})
Idiom.belongsToMany(Serie, {through: 'serieidiom', timestamps: false})
Serie.belongsToMany(Idiom, {through: 'serieidiom', timestamps: false})

/* Generos de pelicula */
Movie.belongsToMany(Genre, {through: 'moviegenre', timestamps: false})
Genre.belongsToMany(Movie, {through: 'moviegenre', timestamps: false})
Serie.belongsToMany(Genre, {through: 'seriegenre', timestamps: false})
Genre.belongsToMany(Serie, {through: 'seriegenre', timestamps: false})

/* Favoritos */
Movie.belongsToMany(User, {through: 'moviefavorites', timestamps: false})
User.belongsToMany(Movie, {through: 'moviefavorites', timestamps: false})
Serie.belongsToMany(User, {through: 'seriefavorites', timestamps: false})
User.belongsToMany(Serie, {through: 'seriefavorites', timestamps: false})


/* Carrito */
Cart.belongsToMany(Movie, {through: 'moviecarts', timestamps: false})
Movie.belongsToMany(Cart, {through: 'moviecarts', timestamps: false})
Cart.belongsToMany(Serie, {through: 'seriecarts', timestamps: false})
Serie.belongsToMany(Cart, {through: 'seriecarts', timestamps: false})

Cart.belongsTo(User);
User.hasMany(Cart);



/* Order */
Order.belongsToMany(Movie, {through: 'movieorder', timestamps: false})
Movie.belongsToMany(Order, {through: 'movieorder', timestamps: false})
Order.belongsToMany(Serie, {through: 'serieorder', timestamps: false})
Serie.belongsToMany(Order, {through: 'serieorder', timestamps: false})

Order.belongsTo(User);
User.hasMany(Order);


/* Tarjeta de credito */
Card.belongsTo(User)
User.hasMany(Card)


/* Rols */
User.belongsTo(Rol)//, {through: 'userRol', association: 'rolUser', timestamps: false})
Rol.hasMany(User)//, {through: 'userRol', association: 'rolUser', timestamps: false})

/* Aqui terminan las conecciones(asociaciones) */


module.exports = { 
  ...sequelize.models,      //Exporta ...sequelize.models para poder acceder asi:  const {Movie, User} = require()
  db: sequelize
};