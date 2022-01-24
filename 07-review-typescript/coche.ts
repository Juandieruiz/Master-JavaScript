// Clase de coche/Molde- POO
class Coche{
    
    // atributos - propiedades
    public color:string;
    public modelo: string;
    public velocidad: number = 0



    // constructor de objetos con valores por defecto
    // constructor(modelo: string, color: string){
    //     this.modelo = modelo;
    //     this.color = color;
    //     this.velocidad = 0;
    // }


    // métodos - funciones
    public getColor(){
        // nos devuelve el valor de la propiedad color
        return this.color;
    }
    // metodo setter que envia un valor a la propiedad color
    public setColor(color: string){
        // el valor asignado viajará a traves de la propiedad color
        this.color = color;
    }

    
    // mnetodos - funciones a realizar
    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        // nos devuelve el valor de la propiedad velocidad
        return this.velocidad;
    }

}

// Creación de Objetos
let coche1 = new Coche();
let coche2 = new Coche();
let coche3 = new Coche();

// Asignación de valores color a los atributos
coche1.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");

// Asignación de valores velocidad a los atributos
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche2.acelerar();
coche1.frenar();



// Mostrar valores de los atributos
console.log("La velocidad del coche 1 es: " + coche1.getVelocidad());
console.log("La velocidad del coche 2 es: " + coche2.getVelocidad());
console.log("La velocidad del coche 3 es: " + coche3.getVelocidad());
console.log('____________________________________________')
console.log("El color del coche 1 es: " + coche1.getColor());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());
