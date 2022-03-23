const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const User = sequelize.define('User', {
            first_name: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false,  
                },
            last_name: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
            user_name: {
                  type: DataTypes.STRING(20),
                  alowNull: false
            },
            email: {
                  type: DataTypes.STRING(50),
                  alowNull: false,
                  unique: true
            },
            password: {
                  type: DataTypes.STRING(100),
                  alowNull: false
            },
            avatar: {
                  type: DataTypes.STRING(100),
            },
            phone: {
                  type: DataTypes.STRING(20),
            },
            date_of_birth: {
                  type: DataTypes.DATE
            },
            genre: {
                  type: DataTypes.TEXT('tiny')
            },
            address: {
                  type: DataTypes.STRING(100),
            },
            country: {
                  type: DataTypes.TEXT('tiny')
            },
            province: {
                  type: DataTypes.TEXT('tiny')
            },
            city: {
                  type: DataTypes.TEXT('tiny')
            }
      }, {
            sequelize: sequelize,
            modelName: 'user',
            tableName: 'users'
      })
      User.associate = function(models){
            User.belongsTo(models.Rol, {
                  as: 'Rol',
                  foreignKey : 'RolId'
            })
            return User
      }
}