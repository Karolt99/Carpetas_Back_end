//Validaciones va a ser un programa que me valide si una contraseña es correcta
//1. Tener más de 8 caracteres
//2. Tenga por lo menos una mayuscula
//3. Tenga un número

const validarContrasena = function (contrasena) {
    //Expresiones regulares
    const mayuscula = /[A-Z]/.test(contrasena)
    const numero = /\d/.test(contrasena)
    const cantidad = contrasena.length > 8;
    
    return mayuscula && numero && cantidad
    }
     console.log(validarContrasena('BACKEND1234'))
    module.exports = validarContrasena