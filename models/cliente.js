/*
@Descripcion: Modelo de Clientes
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cliente = sequelize.define('Cliente', {
    codigointerno: {
      type : DataTypes.STRING,
      allowNull : true
    },
    razonsocial: {
      type : DataTypes.STRING,
      allowNull : false
    },
    identificacion: {
      type : DataTypes.STRING,
      allowNull : true
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      /*validate : {
        isIn : ['activo', 'inactivo' ]
      }*/
    },
    direccion: {
      type : DataTypes.STRING,
      allowNull : true
    },
    telefono: {
      type : DataTypes.STRING,
      allowNull : true
    },
    tipoprecio: {
      type : DataTypes.STRING(1),
      allowNull : false
    },
    estado: {
      type : DataTypes.STRING(1),
      allowNull : true
    }

    
  },{});

  Cliente.associate = function(models){
    
      Cliente.belongsTo(models.Vendedor);
      Cliente.belongsTo(models.Empresa);

  }


  return Cliente;

};
