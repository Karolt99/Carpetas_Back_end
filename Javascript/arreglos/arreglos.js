//Un arreglo es una coleccion de elementos o datos
const lapices=["verde","morado","azul","rojo"]
console.log(lapices)
console.log(lapices[1])
console.log(lapices[3])

const variosDatos=[54, true, "A", "Hola Mundo!", false]
console.log(variosDatos)

const informacion=["Liliana", "Herrera", 65, 35415145, "llherrerap@mail.com"]
console.log(informacion)
console.log(informacion[4])

// Funciones
// La funcion push agrega un elemento al arreglo
lapices.push("rosado")
console.log(lapices)
// La funcion pop quita el ultimo elemento del arreglo
lapices.pop()
console.log(lapices)

const a=Array(100).fill(true)
console.log(a)

//.length me muestra el numero de elementos que hay en un arreglo
console.log("El arreglo tiene: "+a.length+" numeros")

const numeros = [10, 5,8, 96, 12,54, 47, 63, 21, 45]
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])
console.log(numeros[5])
console.log("El arreglo tiene: "+numeros.length)

//FOR imprime hasta cierto numero de datos que yo le pida y muestra los datos

for (let i = 0; i < numeros.length; i++) {
    console.log("el numero " + numeros[i] +" esta en la posicion " + i)
}

for (let i = 0; i < 5; i++) {
    console.log(numeros[i])
}

//.forEach es otra forma de llamar los elementos o datos, de forma mas rapida
lapices.forEach(color => {
    console.log("el color es " + color)
});

informacion.forEach(dato => {
    console.log(dato)
});

numeros.forEach(numero => {
    console.log("Numero por foreach " + numero)
})