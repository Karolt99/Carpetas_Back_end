const datoEntrada = document.getElementById("dato")
const botonGuardar = document.getElementById("guardar")
const contenedorDatos = document.getElementById("datos-guardados")

botonGuardar.addEventListener("click", function (event) {
    event.preventDefault();
    const dato = datoEntrada.value;
    // Se verifica que el dato no este vacio
    if (dato) {
    // Para guardar informacion con localStorage vamos a utilizar el metodo setItem
    localStorage.setItem("dato", dato)
    contenedorDatos.textContent = `Dato guardado ${dato}`
    } else {
    alert("Debes introducir informacion")
    }
    })
    // Para obtener la informacion guardada en el setItem utilizamos el metodo getItem
    const datoGuardado = localStorage.getItem("dato")
    
    if(datoGuardado){
    contenedorDatos.textContent = `El dato guardado en la anterior sesion fue: ${datoGuardado}`
    }else{
    contenedorDatos.textContent = "No hay datos guardados"
    }