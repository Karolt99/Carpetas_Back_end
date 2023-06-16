const mysql = require("mysql")
const config = require("./config.js")

const conexion = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})

conexion.connect((error)=>{
    if (error) {
        console.log(`Ha ocurrido un error en la base de datos, el error es: ${error}`)
        return;
    }
    console.log("Conexión exitosa a la base de datos")

    conexion.query('SELECT * FROM pacientes WHERE edad>30;', (error, resultado) =>{
        if (error) {
            console.log("Error al ejecutar la consulta")
        }
        console.log("Resultados de la consulta: ", resultado)
    })
    conexion.end((error)=>{
        if(error){
            console.error("Error al cerrar la conexion")
        }
        console.log("Conexión cerrada correctamente")
    })
})