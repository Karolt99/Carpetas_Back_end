const {sumar} = require('./suma')

test('La función Sumar(a,b) cumple su objetivo', () =>{
//Preparación de la prueba
const numeroUno=2;
const numeroDos=3;
const resultadoEsperado = 5;

//Llamar a la función
const resultadoObtenido=sumar(numeroUno, numeroDos);

// Verificacion y validacion
expect(resultadoObtenido).toBe(resultadoEsperado)
})