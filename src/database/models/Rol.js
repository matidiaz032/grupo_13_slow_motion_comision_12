const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Rol = sequelize.define('Rol', {
            type: {
                  type: DataTypes.INTEGER(2),
                  defaultValue: 0
            },
      }, {
            sequelize: sequelize,
            modelName: 'rol'
      })
}