'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize);
});




const { Genre, Movie, Serie, Price, User, Card, Rol, Idiom } = sequelize.models   //Desestructura todos los modelos para poder usarlos

/*   Aqui comienzan todas las conecciones(asociaciones) */

Price.hasMany(Movie)         
Movie.belongsTo(Price)
Price.hasMany(Serie)
Serie.belongsTo(Price)


Idiom.belongsToMany(Movie, {through: 'movieIdiom', timestamps: false})
Movie.belongsToMany(Idiom, {through: 'movieIdiom', timestamps: false})
Idiom.belongsToMany(Serie, {through: 'serieIdiom', timestamps: false})
Serie.belongsToMany(Idiom, {through: 'serieIdiom', timestamps: false})


Movie.belongsToMany(Genre, {through: 'movieGenre', timestamps: false})
Genre.belongsToMany(Movie, {through: 'movieGenre', timestamps: false})
Serie.belongsToMany(Genre, {through: 'serieGenre', timestamps: false})
Genre.belongsToMany(Serie, {through: 'serieGenre', timestamps: false})


Movie.belongsToMany(User, {through: 'movieFavorites', timestamps: false})
User.belongsToMany(Movie, {through: 'movieFavorites', timestamps: false})
Serie.belongsToMany(User, {through: 'serieFavorites', timestamps: false})
User.belongsToMany(Serie, {through: 'serieFavorites', timestamps: false})

Movie.belongsToMany(User, {through: 'movieOrders', as: 'movieCart', timestamps: false})
User.belongsToMany(Movie, {through: 'movieOrders', as: 'movieCart', timestamps: false})
Serie.belongsToMany(User, {through: 'serieOrders', as: 'serieCart', timestamps: false})
User.belongsToMany(Serie, {through: 'serieOrders', as: 'serieCart', timestamps: false})


Card.belongsTo(User)
User.hasMany(Card)


User.belongsTo(Rol)//, {through: 'userRol', association: 'rolUser', timestamps: false})
Rol.hasMany(User)//, {through: 'userRol', association: 'rolUser', timestamps: false})

/* Aqui terminan las conecciones(asociaciones) */


module.exports = { 
  ...sequelize.models,      //Exporta ...sequelize.models para poder acceder asi:  const {Movie, User} = require()
  db: sequelize
};