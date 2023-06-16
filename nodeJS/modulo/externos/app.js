// Importar los modulos de lodash
const {shuffle, uniq, sample, sortBy} = require("lodash")

//se llaman las funciones con respectivos nombres definidos con constantes

// Shuffle mezcla los elementos de un arreglo
const mezclarArreglos = function(arreglo){
    return shuffle(arreglo)
}
// Sample obtiene un elemento aleatorio de un arreglo
const aleatorioArreglos = function(arreglo){
    return sample(arreglo)
}
// Uniq quita los duplicados de un arreglo
const quitarDuplicados = function(arreglo){
    return uniq(arreglo)
}
//muestra en orden los elementos, ejem los numeros
const ordenarArreglos = function(arreglo){
    return sortBy(arreglo)
}

//constantes creadas para los datos a mostrar en la consola:
const numeros = [5, 6, 9, 4, 1, 3, 15, 8, 0]
const numerosDos =[93,98,97,32,45,66,98,32]
const nombres = ['Jesus', 'Cristian', 'Pedro', 'Maria', 'Euraclides', 'Jesus', 'Pedro', 'Liliana', 'Maria']

//para mostrar las funciones con las constantes:
console.log(`Arreglo mezclado: ${mezclarArreglos(numeros)}`)
console.log(`El elemento aleatorio es: ${aleatorioArreglos(nombres)}`)
console.log(`El arreglo sin duplicados: ${quitarDuplicados(nombres)}`)
console.log(`El arreglo ordenado es: ${ordenarArreglos(numeros)}`)
console.log(`El arreglo ordenado es: ${ordenarArreglos(numerosDos)}`)
console.log(`El arreglo sin duplicados: ${quitarDuplicados(numerosDos)}`)