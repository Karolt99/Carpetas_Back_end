const express = require("express")
const app = express()

// Establecer EJS como motor de plantilla en nuestra aplicacion
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // Definimos un objeto que queremos mostrar en nuestra plantilla
    const datos ={
        nombre: 'Karol',
        cuerpo: 'Esta es mi primera plantilla!!! :) :) :)'
    }
    // render() es un metodo que nos permite combinar una plantilla como Index.ejs con nuestro contenido, 
    res.render('index', {datos})
})

const puerto = 3000
app.listen(puerto, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${puerto}`)
})