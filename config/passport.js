
  //load bcrypt
  var bCrypt = require('bcryptjs');

  module.exports = function(passport,user){

  var User = user;
  var LocalStrategy = require('passport-local').Strategy;


  passport.serializeUser(function(user, done) {
          done(null, user.id);
      });


  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user) {
        if(user){
          done(null, user.get());
        }
        else{
          done(user.errors,null);
        }
      });

  });


  passport.use('local-signup', new LocalStrategy(

    {
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done){

      console.log(email);
      console.log(password);
      var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      let clave = generateHash(password);
        console.log("@@@@@@@@@@@@@@@@@@@@@@@");
        console.log(clave);
    //      let persona = User.buscarUsuarios(email);
      //    console.log(persona);
       User.findOne({where: {email:email}}).then(function(user){

      if(user)
      {
        console.log("ya existe este usuario");
        return done(null, false, {message : 'That email is already taken'} );
      }

      else
      {
        var userPassword = generateHash(password);
        console.log("AHORAAAAAAAAA QUE PASO");
        var data =
        { email:email,
        password:userPassword,
        nombre: req.body.nombre,
        codigointerno: '1234',
        estado:'A'
        };

        User.create(data).then(function(newUser,created){
          if(!newUser){
            return done(null,false);
          }
          console.log("******");
          console.log(newUser.id);

          if(newUser){
            return done(null,newUser);

          }


        });
      }


    });



  }



  ));

  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(

  {

  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
  },

  function(req, email, password, done) {

    var User = user;
    console.log(email);
    console.log(password);
    console.log("&&&&&&&&&&&&&&&&&&&&&");
    var isValidPassword = function(userpass,password){
      return bCrypt.compareSync(password, userpass);
    }

    User.findOne({ where : { email: email}}).then(function (user) {

      if (!user) {
        return done(null, false);//, req.flash('loginMessage', 'No user found.'));//{ message: 'Email does not exist' });
      }
      console.log(user.password);
      if (!isValidPassword(user.password,password)) {

        return done(null, false);//, req.flash('loginMessage', 'Oops! Wrong password.'));//{ message: 'Incorrect password.' });

      }

      var userinfo = user.get();
      console.log(userinfo);
      return done(null,userinfo);

    }).catch(function(err){

      console.log("Error:",err);
      console.log("aqui hay un error");
     return done(err);
      // return done(null, false);//, req.flash('loginMessage', 'Oops! Wrong password.'));//{ message: 'Something went wrong with your Signin' });


    });

  }
  ));

  }
