// Busca el boton que tenga el id="boton"
const boton = document.getElementById("boton")

boton.addEventListener("click", function () {
alert("Primera manipulación del DOM!")
console.log("Comprobando el funcionamiento")
})

const botonSecundario = document.getElementById("boton2")
botonSecundario.addEventListener("click", function()
{
    let nombre = "Karol"
    alert("Desarrollado por "+ nombre +" en el curso de Back end")
})

// Obtener el boton que tiene el id parrafo-boton y guarlo en una constate
const botonParrafo = document.getElementById("boton-parrafo")
// Cuando se le de click va a seguir la funcion
botonParrafo.addEventListener("click", function(){
// Se trae el elemento HTML que encuentre con la etiqueta p
const parrafo = document.querySelector("p")
// textContent cambia el contenido del texto del elemento parrafo
parrafo.textContent = "Este parrafo se esta cambiando"
})

// Cuando se le de click va a seguir la funcion
botonParrafo.addEventListener("click", function(){
    // Se trae todo elemento HTML que encuentre con la etiqueta p
const parrafo = document.querySelectorAll("p")
    // textContent cambia el contenido del texto del elemento parrafo, enumerado
parrafo[1].textContent = "Probando el boton cambiar parrafo"
    })

const botonTitulo = document.getElementById("boton-h1")
botonTitulo = document.addEventListener("click", function(){
    const Titulo = document.querySelector("h1")
    Titulo.textContent= "Este es mi nuevo titulo"

    botonParrafo.addEventListener("click", function(){
        // Se trae el elemento HTML que encuentre con la etiqueta p
        const parrafo = document.querySelectorAll("p")
        // textContent cambia el contenido del texto del elemento parrafo
        parrafo[1].textContent = "Probando el boton cambiar parrafo"
        
        const subtitulo = document.querySelectorAll("h2")
        console.log(subtitulo)
        
        subtitulo[3].textContent = "Subtitulo nuevo!"
        })
})