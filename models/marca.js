/*
@Descripcion: Modelo de Marca
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Marca = sequelize.define('Marca', {

    descripcion: {
      type : DataTypes.STRING,
      allowNull : false
    },
    estado: {
      type      : DataTypes.BOOLEAN,
      allowNull : true
    }
  }, {});


  return Marca;

};
