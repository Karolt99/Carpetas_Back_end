function mostrar_doctores(){
    let doctores =[]
    let local_doctores = localStorage.getItem("doctores")
    if(local_doctores){
        doctores = JSON.parse(local_doctores)
    }
    const tabla_doctores = document.getElementById("tabla-doctores")
    const cuerpo_tabla = tabla_doctores.getElementsByTagName("tbody")[0]
    doctores.forEach(doctor => {

        let fila = cuerpo_tabla.insertRow()

        let celdaNombre = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo= fila.insertCell()

        celdaNombre.textContent = doctor.nombre
        celdaApellido.textContent = doctor.apellido
        celdaCedula.textContent = doctor.cedula
        celdaEspecialidad.textContent = doctor.especialidad
        celdaConsultorio.textContent = doctor.consultorio
        celdaCorreo.textContent = doctor.correo
    });
}
mostrar_doctores()