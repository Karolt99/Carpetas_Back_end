var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/perfil', (req, res) => {
  res.render('perfil', { nombre: 'Karol Tatiana Garzon' })
  })
router.get('/info', (req, res) => {
  res.render('info', { nombre: 'Karol Tatiana Garzon', curso:"Desarrollo Back end basico", tecnologias:"HTML,CSS, Javascript, Mysql, Node.js, Express,etc", edad:"23" })
  })

module.exports = router;
