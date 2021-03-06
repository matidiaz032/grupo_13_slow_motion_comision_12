const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Movie = sequelize.define('Movie', {
            title: {
                  type: DataTypes.STRING(100),
                  alowNull: false,
                  unique: true
                },
            description: {
                  type: DataTypes.STRING(500),
                  alowNull: false
            },
            trailer: {
                  type: DataTypes.STRING(300),
                  alowNull: false
            },
            duration: {
                  type: DataTypes.INTEGER,
                  alowNull: false
            },
            rating: {
                  type: DataTypes.DECIMAL(3,1),
                  alowNull: false
            },
            age: {
                  type: DataTypes.DATEONLY,
                  alowNull: false,
            },
            director: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
            subtitle: {
                  type: DataTypes.TEXT('tiny'),
                  defaultValue: 'No'
            },
            image: {
                  type: DataTypes.STRING(100),
                  alowNull: false
            }
      }, {
            sequelize: sequelize,
            modelName: 'movie',
            tableName: 'movies'
      })
      Movie.associate = function(models){
            Movie.belongsTo(models.Idiom, {
                  as: 'Idiom',
                  foreignKey : 'idiomProdcuts'
            })
            return Movie
      }
}
