// Objeto llanta
const llanta = {
    // Propiedades de una llanta
    // Las propiedas son elementos que caracterizan un objeto
    marca: "Michelline",
    tamano: 35.5,
    modelo: "Pilot Street 2"
}
// Objetos
const persona = {
    // Propiedades del objeto persona
    nombre: "Lilina",
    rasgos: ["Rubia", "Alta", "Delgada"],
    altura: 1.75,
    edad: 85,
    genero: "Femenino",
    nacionalidad: "Colombiana"
}

// Arreglo
const arreglo = ["Hola", 15, true]

const mascota = {
    nombre: "Pericles",
    color: "Blanco",
    tipo: "Ave",
    edad: 3,
    raza: "Cacatoa",
    pasatiempos: ["Cantar", "Volar", "Nadar", "Dormir", "Lee"],
    contacto: {
        nombre: "Diana",
        telefono: 32145697,
        correo: "diana@example.com"
    }
}

//si se quiere concatenar y mostrar como en el caso de CONTACTO se pone asi:
console.log("El nombre de la mascota de " +mascota.contacto.nombre+ " es: " + mascota.nombre)

// de resto se pone de esta forma:
console.log("La edad de la mascota es: " + mascota.edad)
console.log("La edad de "+mascota.nombre+" es: " + mascota.edad)

console.log("La mascota de " + mascota.contacto.nombre + " es: "+mascota.tipo)

const Karol ={
    nombre:"Karol",
    Apellido:"Garzon",
    Edad:23,
    nacionalidad:"Colombiana",
    Estadia:"Bogota",
    Pasatiempos:["Leer","ver series","escuchar musica"],
    Soltero: false,
    Contacto:{
        telefono: 20134578,
        correo:"tgarzon@gmail.com",
        Direccion:"calle 95 #67"
    },
    Saludar: function () {
        return "Hola soy Karol"
    }
}
console.log(Karol)

// For in nos permite recorrer un objeto con sus propiedades

for (const propiedad in llanta) {
    console.log("Propiedad "+propiedad+ " valor " + llanta[propiedad])
}

for (const propiedad in persona) {
    console.log("Propiedad "+propiedad+ " valor " + persona[propiedad])
}
for (const propiedad in Karol) {
    console.log("Propiedad "+propiedad+ " valor " + Karol[propiedad])
    Karol.Pasatiempos.forEach(Pasatiempos => { console.log(Pasatiempos)
    });
}

