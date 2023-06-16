//siempre se exporta express al inicio, es importante no saltarse esto:
const express = require("express")
const app = express()

//metodo obtener
app.get('/', (req,res) =>{
    res.send("Hola mundo, este es mi primer servidor!!!! :D")
})
const puerto =3000
app.listen(puerto,() =>{
    console.log(`el servidor se ejecuta en: http://localhost:${puerto}`)
})