const express = require("express")
const morgan = require("morgan")
const helmet = require('helmet')
const bcrypt = require('bcrypt')
const app = express()

// Con morgan podemos tener un registro detallado de las solicitudes que entran
app.use(morgan('common'))
// Con helmet ponemos cabeceras de seguridad para evitar ataques
app.use(helmet())

//codigo para encriptar contraseñas, (.hash) es como el metodo predilecto para encriptar, pero hay muchos mas.
//siempre lleva rondas y contraseña para poder encriptar
const rondas = 10;
const password = 'Karol562354'
bcrypt.hash(password, rondas, (error, resultado) =>{
    if (error) {
        console.log("Error al encriptar la contraseña")
        return;
    }
    console.log(`La contraseña ${password} encriptada es: ${resultado}`)
})

app.get('/', (req, res) =>{
    res.send('Hola!')
})

const puerto = 3000
app.listen(puerto, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${puerto}`)
})