
var vm = new Vue({
	el: '#appSignup',
	mounted() {

	},
	data: {
		nombre: '',
  	usuario : '',
		password: '',
		fallaLogin : false
	},
	methods: {
		login() {
			let self = this;
			var url = "/api/login/register";
			let obj = {
				nombre   : self.nombre, //$('#nombre').val(),
				email    : self.usuario,
				password : self.password
			};
      console.log(obj.nombre);
      console.log(obj.email);
      console.log(obj.password);
			$.ajax({
				type : 'POST',
				data : obj,
				url  : '/api/login/register',
				success(res){
				//	localStorage.setItem('token', res.token);
        alert("what happend!!");
					console.log(res);
				//	window.location.href = '/login';
				},
				error(res){
					alert("no se pudo agregar el registro");
          console.log("Error algo paso");
			//		self.fallaLogin = true;
				}
			});
		}
	}
});

// $(document).keypress(function(e) {
//   if(e.which === 13) {
//     vm.login();
//   }
// });
