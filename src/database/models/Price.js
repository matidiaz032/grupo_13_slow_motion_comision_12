const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Price = sequelize.define('Price', {
            buy: {
                  type: DataTypes.INTEGER,
                  alowNull: false
                },
            rental: {
                  type: DataTypes.INTEGER,
                  alowNull: true
            },
            discount: {
                  type: DataTypes.INTEGER,
                  default: 0
            }
      }, {
            timestamps: false,
            sequelize: sequelize,
            tableName: 'prices'
      })
}