/*
@Descripcion: Modelo de Empresa
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Empresa = sequelize.define('Empresa', {

    razonsocial: {
      type : DataTypes.STRING,
      allowNull : false
    },
    estado: {
      type : DataTypes.STRING(1),
      allowNull : true
    }
  },{
   

  });



  return Empresa;

};
