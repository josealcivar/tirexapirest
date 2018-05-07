/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Grupo = sequelize.define('Grupo', {

    descripcion: {
      type : DataTypes.STRING,
      allowNull : false
    },
    estado: {
      type : DataTypes.STRING(1),
      allowNull : true
    }
  }, {});

  Grupo.associate = function(models) {
    // associations can be defined here
  //   Grupo.hasMany(models.Producto);

  };

  return Grupo;

};
