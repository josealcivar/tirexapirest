/*
@Descripcion: Modelo de Grupo
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
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


  return Grupo;

};
