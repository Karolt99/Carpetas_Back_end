var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Modulo de handlebars: motor de plantillas
const exhbs = require('express-handlebars')//esta linea
const moment = require('moment')//esta linea

var indexRouter = require('./routes/index'); 
var mascotasRouter = require('./routes/mascotas');//esta linea
var medicosRouter = require('./routes/medicos');//esta linea
var citasRouter = require('./routes/citas')//esta linea

var app = express();

const hbs = exhbs.create({//esta linea
  extname: '.hbs',
  partialsDir: ['views/componentes'],
})
//este siguiente codigo tambien
hbs.handlebars.registerHelper('formatoFecha', function (fecha) {
  return moment(fecha).format('YYYY-MM-DD')
})

// view engine setup
app.engine('.hbs', hbs.engine)//esta linea
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mascotas', mascotasRouter);//esta linea
app.use('/medicos', medicosRouter);//esta linea
app.use('/citas', citasRouter)//esta linea

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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






