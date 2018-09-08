/*
@Descripcion: Modelo Detalles Promociones
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Detpromo = sequelize.define('Detpromo', {
    secuencia: {
      type       : DataTypes.INTEGER,
      primaryKey: true,
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

  }, {
  });


Detpromo.associate = function(models){
        Detpromo.belongsTo(models.Empresa,{
                      foreignKey: {
                        primaryKey: true
                      },
                      onDelete: 'CASCADE'});
                    Detpromo.belongsTo(models.Promocion,{
                        foreignKey: {primaryKey:true},
        onDelete: 'CASCADE'});
}

  return Detpromo;

};
