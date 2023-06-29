class Figura {
    constructor(color){
    this.color = color;
    }
    }
    
    class Rectangulo extends Figura{
    constructor(base, altura){
    super()
    this.base=base
    this.altura=altura
    }
    calcularArea(){
    return this.base*this.altura
    }
    }
    
    // Principio de Liskov
    
    class Cuadrado extends Rectangulo {
    constructor(lado){
    super(lado, lado)
    }
    }
    
    class Triangulo extends Figura{
    constructor(base, altura){
    super()
    this.base=base
    this.altura=altura
    }
    calcularArea(){
    return (this.base*this.altura)/2
    }
    }
    
    const figuraUno= new Cuadrado(5);
    console.log(figuraUno.calcularArea())
    const figuraDos= new Triangulo(10,15);
    console.log(figuraDos.calcularArea())
    const figuraTres = new Rectangulo(6,8)
    console.log(figuraTres.calcularArea())