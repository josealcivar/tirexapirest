/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Marca = sequelize.define('Marca', {

    descripcion: {
      type : DataTypes.STRING,
      allowNull : false
    },
    estado: {
      type : DataTypes.STRING(1),
      allowNull : true
    }
  }, {});

  Marca.associate = function(models) {
    // associations can be defined here

  //   Marca.hasMany(models.Producto);

  };

  return Marca;

};
