const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Cart = sequelize.define('Cart', {
            type: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
      }, {
            sequelize: sequelize,
            modelName: 'cart'
      })
}