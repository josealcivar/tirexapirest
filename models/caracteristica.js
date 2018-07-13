/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Caracteristica = sequelize.define('Caracteristica', {
    id:{
      type       : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement: true,
      allowNull  : false
    },
    estado: {
      type      : DataTypes.STRING(1),
      allowNull : false
    }
  }, {});

  Caracteristica.associate = function(models) {
    // associations can be defined here
     Caracteristica.belongsTo(models.Empresa);
     Caracteristica.belongsTo(models.Producto,
      {
        foreignKey: {
                        primaryKey: true,
                        allowNull: false
                      }
      });

   };

  return Caracteristica;

};
