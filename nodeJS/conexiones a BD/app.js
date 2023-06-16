//Importamos la configuracion y modulos
const mysql = require("mysql")
const config = require("./config.js")

// createConnection me permite configurar una base de datos
const conexion = mysql.createConnection({
    // Estos parametros siempre van a ser iguales
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
})
// Me conecta a la base de datos
conexion.connect((error)=>{
// Si ocurre algun error entonces muestra un mensaje de error
    if (error) {
        console.log(`Ha ocurrido un error en la base de datos, el error es: ${error}`)
        return;
    }
    // De lo contrario muestra un mensaje satisfactorio y realiza el query
    console.log("Conexión exitosa a la base de datos")
    // query es el metodo que me permite poner los comandos sql para manipular la base de datos desde mi aplicacion
    conexion.query('SELECT * FROM personas WHERE edad>30;', (error, resultado) =>{
        if (error) {
            console.log("Error al ejecutar la consulta")
        }
        console.log("Resultados de la consulta: ", resultado)
    })
    // El metodo end finaliza la conexion a la base de datos
    conexion.end((error)=>{
        if(error){
            console.error("Error al cerrar la conexion")
        }
        console.log("Conexión cerrada correctamente")
    })
})