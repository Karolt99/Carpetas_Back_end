const express = require("express")
const app = express()

// Configuramos nuestra carpeta public como la carpeta de los archivos estaticos
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Bienvenido')
})

app.get('/noticias', (req, res) =>{
    res.sendFile(__dirname + '/public/noticias.html')
})

app.get('/galeria', (req, res) =>{
    res.sendFile(__dirname + '/public/galeria.html')
})

const puerto = 3000
app.listen(puerto, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${puerto}`)
})