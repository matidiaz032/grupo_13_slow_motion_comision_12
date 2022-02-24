const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Genre = sequelize.define('Genre', {
            name: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
                },
      }, {
            timestamps: false,
            sequelize: sequelize,
            modelName: 'genre'
      })
}