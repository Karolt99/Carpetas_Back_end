var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Curso Back End', nombre:'Karol Tatiana', apellido:'Garzon Barrios', edad:23});
});

router.post('/login', (req, res) => {
  const password = req.body.pass
  const usuario = req.body.user
  const personas = [
  {nombre: 'Liliana', edad: 31},
  {nombre: 'Luisa', edad: 25},
  {nombre: 'Daniel', edad: 41},
  {nombre: 'Jesus', edad: 26},
  {nombre: 'Liliana', edad: 31},
  {nombre: 'Luisa', edad: 25},
  {nombre: 'Daniel', edad: 41}
  ]
  if (password==='backend1234' && usuario==='desarrollador') {
  res.render('usuarios', {personas})
  } else{
  res.render('index', {mensaje: 'Credenciales incorrectas', error: true})
  }
  })
  module.exports = router;