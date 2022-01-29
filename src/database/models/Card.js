const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Card = sequelize.define('Card', {
            bank: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
                },
            type: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
            number: {
                  type: DataTypes.INTEGER,
                  alowNull: false
            },
            expiration_date: {
                  type: DataTypes.DATEONLY,
                  alowNull: false
            },
      }, {
            sequelize: sequelize,
            modelName: 'card'
      })
}