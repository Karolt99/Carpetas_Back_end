
//Importación de modulos 
const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    fs.readFile("index.html", "utf-8", (error, data) => {
        if (error) {
            //Si ocurre algun error el servidor debe mostrar por la cabecera el estado 500
            res.writeHead(500, {"Content-Type": "text/html"});
            res.end("<h1>Error interno del servidor</h1>")
        } else {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data)
        }
    })
})

const port = 3000

server.listen(port, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${port}`)
})