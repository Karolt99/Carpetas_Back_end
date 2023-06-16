/*Crear una funcion que valide las credenciales de un usuario
Si el usuario es backend y la contraseña es 1234 debe mostrar un mensaje 
de bienvenida, de lo contrario no debe mostrar el mensaje*/

const validar = function(usuario, password){
    if(usuario=="backend" && password=="1234"){
        console.log("Bienvenido a nuestro sistema")
    } else {
        console.log("Credenciales incorrectas")
    }
}

let user = "backend"
let pass = "1234"

validar(user, pass)