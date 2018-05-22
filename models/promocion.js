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
  classMethods: {}
  });

  Promocion.buscarPromociones = function(){

  let fecha_actual = moment();
  const DetPromo = sequelize.import("../models/detpromo");
  const promocion = sequelize.import("../models/promocion");
  return new Promise( (resolve, reject) => {
  return DetPromo.findAll({

      where: {
        fechadesde:{
            $lte: fecha_actual
        },
        fechahasta:{
           $gte: fecha_actual
         }
      },

      include: [{
        model: promocion

    }]
    }).then(promos => {

          const respuesta = promos.map(promo => {

              ll_valor = promo.porcentaje;

              return Object.assign({}, {

                 porcentaje: promo.porcentaje

               });
           });
  // si no existe promocion en las fechas, se setea un valor 1 por default
           if(respuesta.length == 0){
             ll_valor=0;
           }
            resolve(ll_valor);

        }).catch( error => {

          console.log("fallo esta vaina");
          reject(error);
        });
      });
    };

  Promocion.associate = function(models) {
    // associations can be defined here
     Promocion.belongsTo(models.Empresa);

  };



  return Promocion;

};
