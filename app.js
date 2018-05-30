var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var passport = require('passport');
var expressSession = require('express-session');
var flash         = require('connect-flash');

// mysql://bddcb9584adbd0:9402c810@us-cdbr-iron-east-04.cleardb.net/heroku_67564d1f5740f3e?reconnect=true

var index = require('./routes/index');
var users = require('./routes/users');
var clientes = require('./routes/clientes.api.router');
var productos = require('./routes/productos.api.router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
  parte inicial de la ruta

*/
app.use('/', clientes);
app.use('/users', users);
app.use('/productos', productos);
app.use('/clientes', clientes);




app.use(expressSession({
  secret: 'mySecretKey',
  saveUninitialized: true,
  resave:true
}));

// passport init
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
