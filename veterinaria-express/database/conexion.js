const mysql = require('mysql')
const conexion = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '1234',
database: 'veterinaria'
})

conexion.connect(function(error) {
if(error){
console.log('Ocurrio un error en la base de datos');
return;
} else{
console.log('Conexion exitosa!')
}
})

module.exports = {conexion}