// Herencia
// Creamos un programa padre
class Programa {
    public nombre: string;
    public version: number;

    getNombre(){
        return this.getNombre;
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
