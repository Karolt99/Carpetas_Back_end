const express = require('express')
const mysql = require('mysql')
const config = require('./config.js')

const app = express()

// Contenido dinamico
app.set('view engine', 'ejs')

// (contenido estatico)HTML ESTATICOS! CSS, Imagenes
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//se crea la conexion a la base de datos
const conexion = mysql.createConnection({
// Informacion necesaria para conexion, concuerda con archivo config.js
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
})

//parametros para saber si fue conectada la base de datos o no
conexion.connect(error => {
    if (error) {
        console.log('Error al conectarnos a la base de datos', error)
    } else{
        console.log('Se ha conectado exitosamente a la base de datos')
    }
})

//desde aqui se empieza a crear los diferentes Querys para modificaciones en la base de datos
//pero, desde un servidor. Este pide que me muestre los registros de una tabla de la BD 
app.get('/', (req, res) =>{
    conexion.query('SELECT * FROM personas', (error, resultados) => {
        if(error){
            res.status(500).send('Error en la consulta')
        } else{
            console.log(resultados)
            res.status(200).render('usuarios', {resultados: resultados})
        }
    })
})

// Aqui se empieza a crear el query de agregar usuarios
app.get('/agregarUsuario', (req, res) =>{
    res.status(200).sendFile(__dirname + '/public/agregar.html')
})

app.post('/agregar', (req, res) => {
    const cedula = req.body.id;
    const nombre = req.body.name;
    const apellido = req.body.lastname;
    const edad = req.body.age;
    const fecha_nacimiento = req.body.birth;
    conexion.query(`INSERT INTO personas (cedula, nombre, apellido, edad, fecha_nacimiento) VALUES (${cedula}, '${nombre}', '${apellido}', ${edad}, '${fecha_nacimiento}')`, (error, resultado) =>{
        if(error){
            res.status(500).send('Error en la consulta')
        } else{
            res.redirect('/')
        }
    })
})

//Aqui se empieza a crear el query para buscar y actualizar un usuario
app.get('/buscarUsuario', (req, res) => {
    res.status(200).sendFile(__dirname + '/public/buscar.html')
})

app.post('/buscarActualizar', (req, res) => {
    const cedula = req.body.id;
    conexion.query(`SELECT * FROM personas WHERE cedula = ${cedula}`, (error, registros) => {
        if(error){
            res.status(500).send('Error en la consulta')
        } else{
            res.status(200).render('actualizar', {registros: registros})
        }
    })
})

//ACTUALIZAR UN DATO DE BD DESDE EL SERVIDOR
app.post('/actualizar', (req, res) => {
    const nombre = req.body.name;
    const apellido = req.body.lastname;
    const edad = req.body.age;
    const cedula = req.body.id;
    conexion.query(`UPDATE personas SET nombre='${nombre}', apellido='${apellido}', edad=${edad} WHERE cedula=${cedula}`, (error, resultado) => {
        if (error) {
            console.log(error)
            res.status(500).send('Error al actualizar el registro')
        } else{
            res.status(200).redirect('/')
        }
    })
})

//ELIMINAR UN DATO DE BD DESDE EL SERVIDOR
app.post('/eliminar', (req, res) => {
    const cedula = req.body.id;
    conexion.query(`DELETE FROM personas WHERE cedula=${cedula}`, (error, resultado) =>{
        if (error) {
            res.status(500).send('Error al eliminar el registro')
        } else {
            res.status(200).redirect('/')
        }
    })
})

//Se crea el puerto:
app.listen(config.puerto, config.ip, () => {
    console.log(`El servidor esta corriendo en http://${config.ip}:${config.puerto}`)
})