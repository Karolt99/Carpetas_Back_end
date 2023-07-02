var express = require('express');
var router = express.Router();
const { conexion } = require('../database/conexion.js')

//Listando todos los medicos
router.get('/', function(req, res, next) {
    conexion.query('SELECT * FROM medicos', (error, medicos) => {
      if(error){
        res.status(500).send('Ocurrio un error' + error)
      } else {
        res.status(200).render('medicos.hbs', {medicos, opcion: 'disabled', activo: true})//desde opcion se cambia el codigo
      }
    })
  });

  //Insertar medicos

router.get('/agregar', (req, res) => {
  res.status(200).sendFile('registro-medicos.html', {root: 'public'})
})

router.post('/guardar-medicos', (req, res) => {
  const id = req.body.id
  const nombres = req.body.nombres
  const apellidos = req.body.apellidos
  const especialidad = req.body.especialidad
  const consultorio = req.body.consultorio
  const correo = req.body.correo
  

  conexion.query(`INSERT INTO medicos (id, nombres, apellidos, especialidad, consultorio, correo) VALUES (${id}, '${nombres}', '${apellidos}', '${especialidad}', '${consultorio}','${correo}')`, (error, resultado) => {
    if (error) {
      res.status(500).send('Ocurrio un error en la consulta'+ error)
    } else {
      res.status(200).redirect('/medicos')
    }
  })
});

//Eliminando medicos

router.get('/eliminar/:id', (req, res) => {
  const id = req.params.id
  conexion.query(`DELETE FROM medicos WHERE id=${id}`, (error, resultado) => {
    if(error){
      res.status(500).send('Ocurrio un error en la consulta ' + error)
    } else {
      res.status(200).redirect('/medicos')
    }
  })
});

//Actualizar medicos

router.get('/activar', function(req, res, next) {
  conexion.query('SELECT * FROM medicos', (error, medicos) => {
    if(error){
      res.status(500).send('Ocurrio un error' + error)
    } else {
      res.status(200).render('medicos.hbs', {medicos, opcion: ''})
    }
  })
});

router.post('/actualizar/:id', (req, res) => {
  const id = req.params.id
  const nombres = req.body.nombres
  const apellidos = req.body.apellidos
  const especialidad = req.body.especialidad
  const consultorio = req.body.consultorio
  const correo = req.body.correo
  

  conexion.query(`UPDATE medicos SET nombres='${nombres}', apellidos='${apellidos}',especialidad='${especialidad}', consultorio=${consultorio}, correo='${correo}' WHERE id=${id}`, (error, resultado) => {
    if (error) {
      res.status(500).send('Ocurrio un error en la ejecución ' + error)
    } else {
      res.status(200).redirect('/medicos')
    }
  })
})

  module.exports = router;
  