/*
	@Descripcion:
	@Autor: Jose Alcivar
	@FechaCreacion: 12/07/2018
	@UltimaEdicion:

*/
'use strict';

var vm = new Vue({
	el: '#appLogin',
	mounted() {

	},
	data: {
  	usuario : '',
		password: '',
		fallaLogin : false
	},
	methods: {
		login() {
			let self = this;
			var url = "/api/login/login";
			let obj = {
				email  : self.usuario,
				password : self.password
			};

			$.ajax({
				type : 'POST',
				data : obj,
				url  : '/api/login/login',
				success(res){
				//	localStorage.setItem('token', res.token);
          console.log("what happend!!");
				//	window.location.href = '/index';
				},
				error(res){
          console.log("algo");
				//	self.fallaLogin = true;
				}
			});
		}
	}
});
