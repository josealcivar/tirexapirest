/*
@Descripcion: Modelo de Promocion
@Autor: jose Alcivar
@FechaCreacion: 08/05/2018
@UltimaFechaModificacion: 08/05/2018 @JoseAlcivar
*/
'use strict';


var moment = require('moment');
var ll_valor;


module.exports = function(sequelize, DataTypes) {
  var Promocion = sequelize.define('Promocion', {
    comentario: {
      type : DataTypes.STRING,
      allowNull : false
    },
    fecha: {
      type : DataTypes.DATE,
      allowNull : false
    },
    estado: {
      type : DataTypes.STRING(1),
      allowNull : true
    }
  }, {
    classMethods: {
      associate: function(models) {
            // associations can be defined here
         Promocion.belongsTo(models.Empresa);
            }
          }
  });

  
  return Promocion;

};
