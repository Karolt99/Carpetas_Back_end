// Realiza la solicitud para obtener el archivo tienda.json
// Realiza la solicitud para obtener el archivo tienda.json
// Metodos que sirve como puende de comunicacion entre en JS y el JSON
fetch("tienda.json")
.then(info => info.json())
.then(data => {
    console.log(data)
    data.forEach(producto => {
        console.log(producto.nombreProducto)
        console.log(producto.descripcion)
    });
})
.catch(error =>{
    console.error("Ocurrio un error al obtener los datos! Revisa porfavor tu codigo")
    console.error(error)
})