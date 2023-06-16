const express = require("express")
const app = express()

//se empiezan a crear GET para obtener las paginas, el enrutamiento

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.get('/noticias', (req, res) =>{
    res.send("Esta es nuestra pagina de noticias!")
})

app.get('/galeria', (req, res) =>{
    res.sendFile(__dirname+'/galeria.html')
})

// (*) el asterisco quiere decir que cuando no es (/) osea una pagina, 
//basicamente anuncia que no se encuentra la pag
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/error.html')
})

const puerto = 3000
app.listen(puerto, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${puerto}`)
})