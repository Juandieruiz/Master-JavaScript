// !MODULOS INTERNOS
module Tienda{
    export class Ropa{
        constructor(public title:string){
            alert(' Tienda de Ropa'+ title);
        }
    }
    export class Informatica{
        constructor(public title:string){
            alert('Tienda de Tecnología ' + title);
        }
    }
}

import Informatica = Tienda.Informatica;
let cargar_informatica = new Informatica("JuandInformatica");

// !DECORADOR
// El Decorador arranque agregara un nuevo metodo/funcion a la clase
function arranque(lanzar:string){
    return function(target:Function){
        // Es una funcion que devuelve un console log
        target.prototype.lanzamiento = function(): void{
            alert(lanzar);
        }
    }
}


// Herencia
// Creamos un programa padre
@arranque("Lanzamiento del Programa a la aplicación")
class Programa {
    [x: string]: any;
    
    public nombre: string;
    public version: number;

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }
    
    
    getVersion(){
        return this.getVersion;
    }

    setVersion(version:number){
        this.version = version;
    }


}
// Decorador
let programa = new Programa();
programa.lanzamiento();



// Creamos un programa hijo en el que instanciamos el padre
class EditorVideo extends Programa{
    public timeline:number;

    setTimeline(timeline:number){
        this.timeline = timeline;
    }

    getTimeline(){
        return this.timeline;
    }


    // Creamos un metodo para mostrar los datos del programa
    getAllData():string{
        return this.nombre + " - " + this.version + " - " + this.timeline;
    }
}



// Creamos un objeto de tipo editor video que contiene los atributos de la clase padre e hijo
let editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());


// Logica de formulario

let programas = [];

function guardar(){
    // Obtenemos los valores del formulario
    let nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    // Creamos un nuevo objeto 
    let programa = new Programa();
        // Asignamos los valores al objeto
        programa.setNombre(nombre);
        programa.setVersion(1);
        // Añadimos el objeto a un array
        programas.push(programa);

    // Recorremos el Array de programas
    let list = "";
    for(let i=0; i<programas.length; i++){
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    // Mostramos los datos en el HTML
    let listado = <HTMLElement>document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";

}