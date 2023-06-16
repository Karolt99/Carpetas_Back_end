class Persona {
    constructor(nombre, apellido, edad, cedula, telefono){
    this.nombre=nombre
    this.apellido=apellido
    this.edad=edad
    this.cedula=cedula
    this.telefono=telefono
    }
    saludar(){
    console.log(`Hola! mi nombre es ${this.nombre} ${this.apellido}, el numero de mi cedula es: ${this.cedula} tengo ${this.edad} años y mi numero telefinico es: ${this.telefono}`)
    }}
    // Exporto la clase para que pueda ser utilizada en el archivo js principal
    module.exports={
    Persona: Persona
    }

    // Hacer el ejercicio con una persona: Nombre, Apellido, Edad, Cedula, Telefono
// Estos atributos tiene que ir en el cosntructor
// Mostrar un mensaje por consola en donde impriman:
// "Hola mi nombres: " + nombre + apellido
// "Tengo " + edad + "años"
// "Mi numero de telefono es: " + telefono