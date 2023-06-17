var express = require('express');
var router = express.Router();
const { conexion } = require('../database/conexion')

/* GET home page. */
router.get("/", function (req, res, next) {
conexion.query("SELECT * FROM cita_medica", (error, citas) => {
if (error) {
res.status(500).send("Ocurrio un error en la consulta");
} else {
res.status(200).render("citas", { citas });
}
});
});

module.exports = router;//esta linea es importante siempre ponerla