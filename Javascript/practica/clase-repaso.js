//estamos pidiendo que nos traiga datos-mascota.json
fetch("datos-mascotas.json")
//vamos a obtener la respuesta de la consulta a datos-mascota.json
.then(response => response.json())
.then(mascotas => {
    console.log(mascotas);
    //estoy elemento por id
    const tablaMascotas = document.getElementById("tabla-mascotas")
    //estoy trayendo elemtnos por etiqueta
    const cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0]
    /** en este momento mascotas (es igual a) = 
     * [{
        nombreMascota: "Lulu",
        nombreDuenio: "Sonia",
        cedulaDuenio: 123456,
        edadMascota: 2,
        telefonoDuenio: 32145,
        especialidad: "Medicina General",
        doctor: "Karol"
    },
    {
        nombreMascota: "Simba",
        nombreDuenio: "Carlos",
        cedulaDuenio: 789456,
        edadMascota: 4,
        telefonoDuenio: 45564,
        especialidad: "Odongología",
        doctor: "Diana"
    }]
     */
    //length = cantidad, longitud en los arreglos
    for (let i = 0; i < mascotas.length; i++) {

        const mascota=mascotas[1]
        console.log(mascota)
        //ROW = FILA Y COLUMN = COLUMNA CELL= CELDA
        //estamos insertando una fila al TBODY, cuerpoTabla representa el TBODY
        const fila = cuerpoTabla.insertRow();
        //estamos insertando una celda a la fila
        const celdaNombreMascota = fila.insertCell()
        //De la celda nombre mascota asignale el conteido de texto de mascota.nombreMascota
        celdaNombreMascota.textContent= mascota.nombreMascota
        const celdaNombreDuenio = fila.insertCell();
        celdaNombreDuenio.textContent=mascota.nombreDuenio
        
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent=mascota.cedulaDuenio
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=mascota.edadMascota
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=mascota.telefonoDuenio
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=mascota.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent=mascota.doctor
    }
})
.catch(error => console.error(error))