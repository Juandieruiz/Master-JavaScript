// Clase (molde de objeto) Coche
// export class Coche{
// ? Interfaces
interface CocheBase{
    setColor(color);
    getColor();
}

class Coche implements CocheBase{

    // Propiedades (características del objeto)
    private color: string;
    private model: string;
    private owner: string;
    private price: number;
    private autopilot: boolean;

    // Métodos (funciones o acciones del objeto)  
    
    // CONSTRUCTOR Se ejecuta cuando creamos una instancia de la clase
    constructor(color: string, model: string, owner: string, price: number, autopilot: boolean){
        this.color = color;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.autopilot = autopilot;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}
// Creamos un objeto de la clase Coche
let cocheY = new Coche("rojo", "Model Y", "Tesla", 100000, true);

console.log(cocheY);


//  !NO PUEDES ACCEDER A LAS PROPIEDAS DE UN OBJETO PRIVADO
// let cocheX = new Coche();

// cocheX.color = "Black";
// cocheX.model = "Model X";
// cocheX.owner = "Tesla";
// cocheX.price = 45000;
// cocheX.autopilot = false;