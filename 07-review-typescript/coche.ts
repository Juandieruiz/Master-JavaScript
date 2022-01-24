// interface donde declaramos obligatoriamente los atributos que tendra la clase
interface CocheBase {
    getModelo():string;
    getVelocidad():number;
}

// Clase de coche/Molde- POO
class Coche implements CocheBase{
    
    // Definir atributos - propiedades
    public color:string;
    public modelo: string;
    public velocidad: number;



    // constructor de objetos con valores por defecto
    constructor(modelo:any = null){
        this.modelo = "TESLA GENERICO"; 
        this.color = "Blanco";
        this.velocidad = 0;
        
        // comprobamos si el modelo es nulo
        if(modelo == null){
            this.modelo = "TESLA GENERICO";
        }else{
            this.modelo = modelo;
        }
    }


   // !GETTER Y SETTER
    // métodos - funciones

    // ? getModelo - SetModelo
    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo = modelo;
    }

    // ? getColor - SetColor
    public getColor(){
        // nos devuelve el valor de la propiedad color
        return this.color;
    }
    public setColor(color: string){
        // el valor asignado viajará a traves de la propiedad color
        this.color = color;
    }

    // ? Funciones acelerar y frenar
    // mnetodos - funciones a realizar
    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    // ? getVelocidad - SetVelocidad
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

// Asignación de valores modelo a los atributos
coche1.setModelo("Tesla X");

// Mostrar valores de los atributos
console.log("El color del coche 1 es: " + coche1.getColor());
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("La velocidad del coche 1 es: " + coche1.getVelocidad());
console.log('____________________________________________');

console.log("La velocidad del coche 2 es: " + coche2.getVelocidad());
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log('____________________________________________');

console.log("El color del coche 3 es: " + coche3.getColor());
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("La velocidad del coche 3 es: " + coche3.getVelocidad());
