//Modulos locales: Los que yo como desarrollador programo (ejemplo: config.js)
const config = require("./config.js")
//Modulos internos: los que no tengo que programar ni instalar con npm (ejemplo: http)
const http = require("http")
// Modulo que nos sirve para leer archivos del servidor
const fs = require("fs")

//req -> solicitud (cliente)
//res -> respuesta (servidor)
const server = http.createServer((req, res) => {
    if(req.url==="/" && req.method==="GET"){
        fs.readFile("index.html", (error, data) =>{
            if(error){
                res.writeHead(500, {"Contet-Type": "text/html"});
                res.write("<h1>Error interno del servidor! :(");
                res.end();
            }
            res.writeHead(200, {"Contet-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } 

    // para usar el metodo POST de enviar
    else if (req.url==="/enviado" && req.method==="POST"){
        fs.readFile("enviado.html", (error, data) =>{
            if(error){
                res.writeHead(500, {"Contet-Type": "text/html"});
                res.write("<h1>Error interno del servidor! :(");
                res.end();
            }
            res.writeHead(200, {"Contet-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } 

    //para mostrar errores
    else {
        fs.readFile("error-404.html", (error, data) =>{
            if(error){
                res.writeHead(500, {"Contet-Type": "text/html"});
                res.write("<h1>Error interno del servidor! :(");
                res.end();
            }
            res.writeHead(404, {"Contet-Type": "text/html"});
            res.write(data);
            res.end();
        })
    }
})
// Lanzamos el servidor (inciamos el servidor por el puerto y la direccion del host)
server.listen(config.port, config.host, () => {
    console.log(`El servidor esta corriendo en http://${config.host}:${config.port}`)
})