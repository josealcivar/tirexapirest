/*
@Descripcion: Modelo de vendedor
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendedor = sequelize.define('Vendedor', {
    codigointerno: {
      type : DataTypes.STRING,
      allowNull : true
    },
    nombre: {
      type : DataTypes.STRING,
      allowNull : false
    },
    usuario: {
      type : DataTypes.STRING,
      allowNull : true
    },
    contrasena: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    estado: {
      type : DataTypes.STRING,
      allowNull : true
    }
  }, {
    buscarUsuario: function(ll_usuario, success, err){
      this.findOne({
        where:{
          usuario: ll_usuario
        }
      }).then(success).catch(err);
    },
    buscarPassword: function(ll_password, success, err){
      this.findOne({
        where:{
          contrasena: ll_password
        }
      }).then(success).catch(err);
    }
  });

  Vendedor.associate = function(models) {
    // associations can be defined here
    Vendedor.belongsTo(models.Empresa);

  };
  return Vendedor;

};
