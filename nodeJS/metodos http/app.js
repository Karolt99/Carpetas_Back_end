const config = require("./config.js")
const http = require("http")
const fs = require("fs")
// Creamos el servidor. el servidor siempre tiene una solicitud y una respuesta
const server = http.createServer((req, res) => {
    // Si la url es la principal / y el metodo es GET entonces lee el archivo index.html
    if (req.url === "/" && req.method === "GET") {
        fs.readFile("index.html", (error, data) => {
            // Cuando hay un error y no encuentra index.html, entonces muestra el mensaje de error interno del servidor
          if (error) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.write("<h1>Error interno del servidor!! :(</h1>");
            return res.end();
          }
        //   Cuando todo esta perfecto, muestra el index.html
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
      } else if(req.url==="/enviado" && req.method==="POST"){
        //El cuerpo (body) es el contenido de la solicitud HTTP
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        })
        req.on("end", () => {
            console.log(body)
            // Guardar la informacion del fomrulario
            const formData = new URLSearchParams(body)
            const name = formData.get("name")
            const email = formData.get("email")
            console.log(`Nombre: ${name}`)
            console.log(`Correo: ${email}`)

            fs.readFile("enviado.html", "utf8", (error, data) => {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.write("<h1>Error interno del servidor!! :(</h1>");
                    return res.end();
                }else{
                    res.writeHead(200, { "Content-Type": "text/html" });
                    res.write(data);
                    return res.end();
                }
            })
        })
      } else {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.write("<h1>Error 400. El contenido no esta dispoble!! :(</h1>");
        return res.end();
      }
})

server.listen(config.port, config.host, () => {
    console.log(`El servidor esta corriendo en http://${config.host}:${config.port}`)
})