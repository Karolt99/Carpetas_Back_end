//Manejo de errores
let suma = 14+8
try {
    //Bloque de codigo que se ejecuta si todo esta perfecto en mi codigo
    console.log(suma)
    //Al resultado no estar definido debe mostrar un error
    console.log(resultado)
} catch (error) {
    console.log(`Tienes un error en ${error}`)
}