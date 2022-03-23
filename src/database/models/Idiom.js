const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

      const Idiom = sequelize.define('Idiom', {
            name: {
                  type: DataTypes.TEXT('tiny'),
                  alowNull: false
            },
      }, {
            sequelize: sequelize,
            modelName: 'idiom',
            timestamps: false,
            tableName: 'idioms'
      })
      Idiom.associate = function(models){
            Idiom.hasMany(models.Movie, {
                  as: 'Movie',
                  foreignKey : 'idiomProducts'
            })
            return Idiom
      }
}