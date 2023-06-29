class Personas {
    constructor(nombre, altura, edad, telefono, correo){
        this.nombre=nombre;
        this.altura=altura;
        this.edad=edad;
        this.telefono=telefono;
        this.correo=correo;
    }
    // metodo creado para mostrar informacion como UNICA RESPONSABILIDAD
    mostrarInformacion(){
        console.log(`El nombre es: ${this.nombre}`)
        console.log(`La altura es: ${this.altura}`)
        console.log(`La edad es: ${this.edad}`)
        console.log(`El correo es: ${this.correo}`)
        console.log(`El telefono es: ${this.telefono}`)
    }
    // Metodo creado para enviar un mensaje por correo
    enviarCorreo(){
        console.log(this.correo)
    }
}