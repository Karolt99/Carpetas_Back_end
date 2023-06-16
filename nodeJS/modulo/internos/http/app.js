// Importar el modulo http
const http = require('http')

// se Crea el servidor:
// req -> solicitud
// res -> respuesta
const server = http.createServer((req, res) => {
    // Estableciendo el tipo de respuesta que se le va a dar al cliente (texto plano)
    res.setHeader('Content-Type', 'text/plain')
    // Definiendo la respuesta final que se le va a dar al cliente
    res.write("este es mi primer mensaje ")
    res.end('Hola! Este es mi primer servidor :)')
})
// Definiendo el puerto de salida de nuestro servidor
const port = 3000
// Se inicia el servidor por el puerto 3000
server.listen(port, () => {
    console.log("Inicio")
    console.log(`El servidor se esta ejecutando en http://localhost:${port}`)
})