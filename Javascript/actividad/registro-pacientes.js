const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

const registro_formulario = document.getElementById("registro-pacientes")

registro_formulario.addEventListener("submit", function(event){
    event.preventDefault()
    
    //objeto:
    const paciente={
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        edad: edad.value,
        telefono: telefono.value,
        especialidad: especialidad.value  
    }
    console.log(paciente)

    //Arreglo:
    let pacientes=[]
    let local_pacientes = localStorage.getItem("pacientes")
    if(local_pacientes){
        pacientes = JSON.parse(local_pacientes)
    }
    pacientes.push(paciente)
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    registro_formulario.reset()
    alert("Paciente registrado con exito")
})