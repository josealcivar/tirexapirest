/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Detpromo = sequelize.define('Detpromo', {
    secuencia: {
      type       : DataTypes.INTEGER,
      primaryKey : true,
      allowNull  : false
    },
    fechadesde: {
      type      : DataTypes.DATE,
      allowNull : false
    },
    fechahasta: {
      type      : DataTypes.DATE,
      allowNull : false
    },
    porcentaje: {
      type      : DataTypes.DECIMAL(4,2),
      allowNull : false
    }
  }, {});

  Detpromo.associate = function(models) {
    // associations can be defined here
     Detpromo.belongsTo(models.Empresa,{
    //   foreignKey: {
         primaryKey: true
    //   }
  });
     Detpromo.belongsTo(models.Promocion);

     /* Detpromo.belongsTo(models.Promocion,{
       foreignKey: {
         primaryKey: true
       },
       onDelete: 'CASCADE'});
       */


  };

  return Detpromo;

};
