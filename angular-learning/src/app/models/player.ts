export class Player{
    
    // Método 1 
    /*
    public nombre: string;
    public arma1: string;
    public arma2: string;
    public especialidad: string;
    public disponible: boolean;

    constructor(nombre: string, arma1: string, arma2: string, especialidad: string, disponible: boolean){
        this.nombre = nombre;
        this.arma1 = arma1;
        this.arma2 = arma2;
        this.especialidad = especialidad;
        this.disponible = disponible;
    } 
    */
   // Método 2
    constructor(
        public nombre: string,
        public userName: string,
        public tagName: string,
        public level: number,
        public mapa: string,
        public disponible: boolean
    ){}
    
} 

