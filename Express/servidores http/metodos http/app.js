const express = require("express")
const app = express()
//middleware para obtener informacion desde la URL
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
// Le mandamos una respuesta OK con el archivo index.html cuando el cliente solicita la pagina /
    res.status(200).sendFile(__dirname + '/index.html')
})

//metodo de envio (POST) con el formulario de index 
app.post('/formulario', (req, res)=>{
    //guarda y envia la informacion por una URL
    const nombre = req.body.name
    const email = req.body.email
    const comentario = req.body.comentario
    res.status(200).send(`Hola! ${nombre}, tu correo electronico es: ${email}. ¡Bienvenid@ a nuestra pagina!. Dejaste un comentario: ${comentario}`)
})

const puerto = 3000
app.listen(puerto, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${puerto}`)
})








