// Obtener los elementos del formulario por medio del DOM

const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")
const operacion = document.getElementById("operacion")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

calcular.addEventListener("click", function (){
const num1 = Number(valor1.value)
const num2 = Number(valor2.value)
const op = operacion.value
let res;
switch (op) {
    case "+":
        res=num1+num2
        break;
    case "-":
        res=num1-num2
        break;
    case "*":
        res=num1*num2
        break;
    case "/":
        res=num1/num2
        break;
    default:
        res="Operacion no valida"
        break;
}
resultado.textContent = res
})