const config = require("./config.js")
const http = require("http")

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type","text/html")

    const url = req.url;
    console.log(`la url que se obtuvo es: ${url}`)

    const metodo = req.method
    console.log(`el metodo que se obtuvo es: ${metodo}`)

    res.statusCode = 200

    res.write("<h1>Variables de Entorno</h1>")

    res.on("finish", () =>{
        console.log("la respuesta HTTP se ha enviado correctamente")
    })

    res.end("Hola, estoy siendo ejecutado en una variable de entorno")
})

server.listen(config.port, config.host, () =>{
    console.log(`El servidor esta corriendo en http://${config.host}:${config.port}`)
} )