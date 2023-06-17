var express = require('express');
var router = express.Router();
const { conexion } = require('../database/conexion.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  conexion.query('SELECT * FROM mascotas', (error, mascotas) => {
    if(error){
      res.status(500).send('Ocurrio un error' + error)
    } else {
      res.status(200).render('mascotas.hbs', {mascotas})
    }
  })
});

router.get('/agregar', (req, res) => {
  res.status(200).sendFile('registro-mascotas.html', {root: 'public'})
})

router.post('/guardar-mascota', (req, res) => {
  const cedula = req.body.cedula
  const nombre = req.body.mascota
  const nombre_duenio = req.body.duenio
  const edad = req.body.edad
  const telefono = req.body.telefono
  conexion.query(`INSERT INTO mascotas (cedula_duenio, nombre, nombre_duenio, edad, telefono_duenio) VALUES (${cedula}, '${nombre}', '${nombre_duenio}', ${edad}, '${telefono}')`, (error, resultado) => {
    if (error) {
      res.status(500).send('Ocurrio un error en la consulta'+ error)
    } else {
      res.status(200).redirect('/mascotas')
    }
  })
})

router.get('/eliminar/:cedula', (req, res) => {
  const cedula = req.params.cedula
  conexion.query(`DELETE FROM mascotas WHERE cedula_duenio=${cedula}`, (error, resultado) => {
    if(error){
      res.status(500).send('Ocurrio un error en la consulta ' + error)
    } else {
      res.status(200).redirect('/mascotas')
    }
  })
})

module.exports = router;