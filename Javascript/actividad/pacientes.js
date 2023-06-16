function mostrar_pacientes(){
    let pacientes =[]
    let local_pacientes = localStorage.getItem("pacientes")
    if(local_pacientes){
        pacientes = JSON.parse(local_pacientes)
    }
    const tabla_pacientes = document.getElementById("tabla-pacientes")
    const cuerpo_tabla = tabla_pacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(paciente => {

        let fila = cuerpo_tabla.insertRow()

        let celdaNombre = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaEdad = fila.insertCell()
        let celdaTelefono= fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
       

        celdaNombre.textContent = paciente.nombre
        celdaApellido.textContent = paciente.apellido
        celdaCedula.textContent = paciente.cedula
        celdaEdad.textContent = paciente.edad
        celdaTelefono.textContent = paciente.telefono
        celdaEspecialidad.textContent = paciente.especialidad
        
    });
}
mostrar_pacientes()