var express = require('express');
var router = express.Router();
const { conexion } = require('../database/conexion.js')

//Listando todas las mascotas
router.get('/', function(req, res, next) {
  conexion.query('SELECT * FROM pacientes', (error, pacientes) => {
    if(error){
      res.status(500).send('Ocurrio un error' + error)
    } else {
      res.status(200).render('pacientes.hbs', {pacientes,})//desde opcion se cambia el codigo
    }
  })
});

module.exports = router;
