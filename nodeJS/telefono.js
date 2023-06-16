const validar = function(res, telef){
    if (res=="si") {
        console.log("¿que tipo de telefono posee (fijo o movil?")
        if(telef=="fijo"){
            console.log("telefono fijo")
        }
        else{
            console.log("telefono movil")
        }
    } else {
        console.log("usted no tiene numero telefonico")
    }
}
let res = "no"
let telef = ""
validar(res, telef)