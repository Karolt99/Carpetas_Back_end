const saludar = function (nombre) {
    return `Hola! Mi nombre es ${nombre}`
    }
    const sumar = function (a, b){
    return a+b
    }
    const resta = function(a, b){
        return "La resta es: "+(a-b)
    }
    const multiplicacion = function(a, b){
        return "El resultado de la multiplicacion es:"+(a*b)
    }
    const division = function(a, b){
        return a/b
    }

    // Exportar funciones

module.exports = {
    saludar: saludar,
    sumar: sumar,
    resta: resta,
    multiplicacion: multiplicacion,
    division: division
    }