var express = require('express');
var router = express.Router();
const mysql = require('mysql')

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'usuarios'
  })
  
  conexion.connect(function (error) {
  if(error){
  console.log('Error al conectar la base de datos' + error)
  return;
  } else {
  console.log('Conexión exitosa!')
  }
  })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', {root: 'public'})
});

//Metodo POST (Enviar informacion/respuesta)
router.post('/login', (req, res) => {
  const usuario = req.body.user;
  const password = req.body.pass;
  if(usuario==='desarrollador' && password==='backend1234'){
  conexion.query('SELECT * FROM personas;', (error, resultados) => {
  if(error){
  res.status(500).send('Error en la consulta' + error)
  } else {
    res.status(200).render('usuarios', {personas: resultados})
  }
  })
  }
  })

module.exports = router;
