/*
@Descripcion: Modelo de Promocion
@Autor: jose Alcivar
@FechaCreacion: 08/05/2018
@UltimaFechaModificacion: 08/05/2018 @JoseAlcivar
*/
'use strict';

var dateFormat  = require('dateformat');

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

    buscarPromociones: function(){
    let fecha_a = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    console.log(fecha_a);
    const DetPromo = sequelize.import("../models/detpromo");
    return new Promise( (resolve, reject) => {
      Detpromo.findAll({

        where: {
          fechadesde:{
              $lte: fecha_a
          },
          fechahasta:{
             $gte:fecha_a
           }
        },

        include: [{
          model: modelo.this,

      }]
      }).then( promocions => {
            return resolve(promocions);
          })
          .catch( error => {
            return reject(error);
          });
        });
      }

      }
  });

  Promocion.associate = function(models) {
    // associations can be defined here
     Promocion.belongsTo(models.Empresa);

  };



  return Promocion;

};
