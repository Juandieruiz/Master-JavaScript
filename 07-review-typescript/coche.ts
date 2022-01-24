// Clase de coche/Molde- POO
class Coche{
    
    // atributos - propiedades
    public color:string;
    public modelo: string;
    public velocidad: number;

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

}

// Creación de Objetos
let coche1 = new Coche();
let coche2 = new Coche();
let coche3 = new Coche();

// Asignación de valores a los atributos
coche1.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");


// Mostrar valores de los atributos
console.log("El color del coche 1 es: " + coche1.getColor());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());
