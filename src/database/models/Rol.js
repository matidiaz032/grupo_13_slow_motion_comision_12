const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Rol = sequelize.define('Rol', {
            type: {
                  type: DataTypes.INTEGER(2),
                  defaultValue: 0
            },
      }, {
            timestamps: false,
            sequelize: sequelize,
            modelName: 'rol'
      })
      Rol.associate = function(models){
            Rol.hasMany(models.User, {
                  as: 'Users',
                  foreingnKey : 'RolId'
            })
            return Rol
      }
}