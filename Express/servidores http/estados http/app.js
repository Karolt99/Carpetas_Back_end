const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.get('/notfound', (req, res) => {
    res.status(404).sendFile(__dirname+'/notfound.html')
})

app.get('/error', (req, res) => {
    res.status(500).send('Error interno del servidor')
})

app.get('*', (req, res) => {
    res.status(404).send('No se ha encontrado la pagina que solicitas')
})


const puerto = 3000
app.listen(puerto, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${puerto}`)
})