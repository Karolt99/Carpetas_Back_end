const express = require('express')
const mysql = require('mysql')
const config = require('./config.js')

const app = express()

// impotacion Contenido dinamico
app.set('view engine', 'ejs')

// (impotacion de contenido estatico)HTML ESTATICOS! CSS, Imagenes
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

//creación de querys para la base de datos
app.get('/', (req, res) =>{
    conexion.query('SELECT * FROM mascotas', (error, resultados) => {
        if(error){
            res.status(500).send('Error en la consulta')
        } else{
            console.log(resultados)
            res.status(200).render('mascotas', {resultados: resultados})
        }
    })
})

// Aqui se empieza a crear el query de agregar usuarios
app.get('/agregarMascota', (req, res) =>{
    res.status(200).sendFile(__dirname + '/public/agregar.html')
})

app.post('/agregar', (req, res) => {
    const id = req.body.id;
    const nombre = req.body.name;
    const especie = req.body.especie;
    const raza = req.body.raza;
    const edad = req.body.age;
    const propietario = req.body.propietario;
    conexion.query(`INSERT INTO mascotas (id, nombre, especie , raza, edad, propietario) VALUES (${id}, '${nombre}', '${especie}', '${raza}', ${edad}, ${propietario})`, (error, resultado) =>{
        if(error){
            res.status(500).send('Error en la consulta')
        } else{
            res.redirect('/')
        }
    })
})


//Se crea el puerto:
app.listen(config.puerto, config.ip, () => {
    console.log(`El servidor esta corriendo en http://${config.ip}:${config.puerto}`)
})