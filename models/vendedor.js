/*
@Descripcion: Modelo de vendedor
@Autor: jose Alcivar
@FechaCreacion: 12/07/2018
@UltimaFechaModificacion: 03/06/2017 @JoseAlcivar
*/
'use strict';
const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var Vendedor = sequelize.define('Vendedor', {
    codigointerno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {

    crearVendedor: function(vendedor, callback, errorCallback){
            this.create({
              usuario :   vendedor.usuario,
              password:   vendedor.password,
              nombre  :   vendedor.nombre,
              estado  :   vendedor.activo

            }).then(callback).catch(errorCallback);
          },

    buscarUsuario: function(ll_usuario) {
      this.findById({
        where: {
          usuario: ll_usuario
        }
      }).then(user).catch('hola');
    },

  generateHash: function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  },

  validatePassword: function(password) {
    return bcrypt.compareSync(password, this.local.password);
  }
});

  Vendedor.associate = function(models) {
    // associations can be defined here
    Vendedor.belongsTo(models.Empresa);

  };
  return Vendedor;

};
