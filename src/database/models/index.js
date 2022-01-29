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




const { Genre, Movie, Serie, Price, User, Card, Rol } = sequelize.models   //Desestructura todos los modelos para poder usarlos

/*   Aqui comienzan todas las conecciones(asociaciones) */

Price.hasMany(Movie,{
  foreignKey: 'priceId'
})         
Movie.belongsTo(Price, {
  foreignKey: 'priceId'
})
Price.hasMany(Serie,{
  foreignKey: 'priceId'
})
Serie.belongsTo(Price, {
  foreignKey: 'priceId'
})

Movie.belongsToMany(Genre, {through: 'movieGenre', timestamps: false})
Genre.belongsToMany(Movie, {through: 'movieGenre', timestamps: false})

Serie.belongsToMany(Genre, {through: 'serieGenre', timestamps: false})
Genre.belongsToMany(Serie, {through: 'serieGenre', timestamps: false})

Movie.belongsToMany(User, {through: 'movieFavorites', timestamps: false})
User.belongsToMany(Movie, {through: 'movieFavorites', timestamps: false})

Serie.belongsToMany(User, {through: 'serieFavorites', timestamps: false})
User.belongsToMany(Serie, {through: 'serieFavorites', timestamps: false})

Card.belongsTo(User)
User.hasMany(Card)

User.belongsTo(Rol)
Rol.hasMany(User)

/* Aqui terminan las coneccion(asociaciones) */


module.exports = { 
  ...sequelize.models,      //Exporta ...sequelize.models para poder acceder asi:  const {Movie, User} = require()
  db: sequelize
};