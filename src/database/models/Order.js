const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Order = sequelize.define('Order', {
            type: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
            expiration_date: {
                  type: DataTypes.DATEONLY,
            },
      }, {
            sequelize: sequelize,
            modelName: 'order'
      })
}