const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Serie = sequelize.define('Serie', {
            title: {
                  type: DataTypes.STRING(100),
                  alowNull: false
                },
            description: {
                  type: DataTypes.STRING(500),
                  alowNull: false
            },
            trailer: {
                  type: DataTypes.STRING(300),
                  alowNull: false
            },
            seasons: {
                  type: DataTypes.INTEGER,
                  alowNull: false
            },
            rating: {
                  type: DataTypes.DECIMAL(3,1).UNSIGNED,
                  alowNull: false
            },
            age: {
                  type: DataTypes.DATEONLY,
                  alowNull: false
            },
            director: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
            subtitle: {
                  type: DataTypes.TEXT('tiny'),
            },
            image: {
                  type: DataTypes.STRING(100),
                  alowNull: false
            }
      }, {
            sequelize: sequelize,
            modelName: 'serie'
      })
}