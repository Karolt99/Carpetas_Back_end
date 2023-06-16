const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const especialidad = document.getElementById("especialidad")
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
const registro_formulario = document.getElementById("registro-doctores")

registro_formulario.addEventListener("submit", function(event){
    event.preventDefault()
    
    //objeto:
    const doctor={
        nombre: nombre.value,
        apellido: apellido.value,
        cedula: cedula.value,
        especialidad: especialidad.value,
        consultorio: consultorio.value,
        correo: correo.value
    }
    
    //Arreglo:
    let doctores=[]
    let local_doctores = localStorage.getItem("doctores")
    if(local_doctores){
        doctores = JSON.parse(local_doctores)
    }
    doctores.push(doctor)
    localStorage.setItem("doctores", JSON.stringify(doctores))
    registro_formulario.reset()
    alert("Doctor registrado con exito")
})