/*
@Descripcion: Modelo de Promociones
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
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

  });

Promocion.associate = (models)=> {
  Promocion.belongsTo(models.Empresa);
}
  
  return Promocion;

};
