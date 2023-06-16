const loginForm = document.getElementById ("login-form")
const username = document.getElementById ("username")
const password = document.getElementById ("password")
const login = document.getElementById ("login")

login.addEventListener("click", function(){
    const usuario = username.value
    const contra = number(password.value)
    const loform = loginForm

    if (username =="user" && password==1234){
        alert("Bienvenido!!")
    } else {
        alert("ingreso invalido")
    }
})