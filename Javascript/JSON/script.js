// API No es más que un intermediario entre dos programas para que puedan comunicarse y compartir información

// Realiza la solitud a la pagina jsonplaceholder
fetch("https://jsonplaceholder.typicode.com/photos")
// Cuando se recibe una respuesta, esta se pasa a un JSON utilizando el metodo json()
// json es la notacion de objetos
.then(response => response.json())
// Cuando se tienen los datos por favor impremelos en consola
.then(data => console.log(data))
// Si ocurre algun error por favor muestrame en consola el error
.catch(error => console.error(error))