// Funcion cambiar canal necesita numeroCanal
// numeroCanal es valor variable
function cambiarCanal(numeroCanal) {
    // Todo lo que esta encerrado entre corchetes es un bloque de codigo
    console.log("El canal ahora es el "+numeroCanal)
    }
    // Llamado de la funcion cambiarCanal y lo pone en el canal 12
    cambiarCanal(12)
    cambiarCanal(5)
    cambiarCanal(8)

    // Funciones declaradas (globales)
// Se pueden llamar desde cualquier lado del codigo independientemente de donde se declaren!

    saludar("Juan")
    saludar("Liliana")

    function saludar(nombre){
        console.log("hola! "+ nombre)
    }
    saludar("Karol")

    // Valor de retorno (return)
// Cuando en la funcion se necesita más de un parametro se separan por comas

    function sumar(a,b){
        return(a+b)
    }
    console.log(sumar(15,20))
    alert(sumar(64,80))


    function holaMundo(){
        return "Hola mundo, esta es mi primera funcion"
    }
    console.log(holaMundo())
    console.log(holaMundo())
    console.log(holaMundo())
    console.log(holaMundo())

    alert(holaMundo())
    let saludo=holaMundo()
    console.log(saludo)

    // Funciones expresadas: hacen parte del ambito local y se definian con una variable o constante

    const decirEdad = function (edad) {
    return edad
    }
    console.log("Tu edad "+decirEdad(15))



    const despedida = function (nombre) {
        return ("adios "+ nombre+ " que te vaya muy bien")
        }
        alert(despedida("Karol"))
        alert(despedida("Daniel"))
        console.log(despedida("Carlos"))

        // Según lo anterior haga un código que haga una función expresadas para cada una de las siguientes
// operaciones:
// 1. Suma.
// 2. Resta.
// 3. Multiplicación.
// 4. División

const calculadoraSumar = function (a,b){
    let resultado = a+b
    return resultado
}

const restar = function (a,b){
    let resultado=a-b
    return resultado
}

const multiplicar = function (a,b) {
    let resultado = a*b
    return resultado
}

const dividir = function (a,b){
    let resultado = a/b
    return resultado
}

let num1=15
let num2=48
let op= prompt("Seleccione una operacion, 1. Suma 2. Resta 3. Multiplicacion 4. División")

switch (op) {
    case "1":
        console.log(calculadoraSumar(num1,num2))
        break;
    case "2":
        console.log(restar(num1,num2))
        break;
    case "3":
        console.log(multiplicar(num1,num2))
        break;
    case "4":
        console.log(dividir(num1,num2))
        break;
    default:
        console.log("Opcion no valida")
        break;
}
        