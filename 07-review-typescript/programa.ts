// Herencia
// Creamos un programa padre
class Programa {
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