//se importa primero el modulo fs
const fs=require("fs")
//si todo sale bien, se ejecuta TRY
try {
    //se crea con readFileSync para que nos permita leer lo que hay en un archivo, archivo que le especificamos en el siguiente codigo
    const archivo = fs.readFileSync("archivo.txt","utf-8")
    console.log(`el contenido del archivo es: ${archivo}`)


 //writeFileSync se usa para modificar o escribir un archivo, en este caso se esta modificanso el archivo Usuarios.txt
    const nuevosusuarios = "Carlos, Diana, Pablo, Juan, Francisco"
    fs.writeFileSync("usuarios.txt",nuevosusuarios,"utf-8")
    console.log(`se han ingresado los nuevos usuarios`)
    const usuarios = fs.readFileSync("usuarios.txt","utf-8")
    console.log(`los usuarios registrados son: ${usuarios}`)  
} 
//si hay un error, CATCH lo especificara
catch {
    console.log("hay un error en el codigo")
}