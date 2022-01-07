// String
let nombre: string = "Juan";

// Number
let numero: number = 123;

// Boolean
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = "hola";
cualquiera = 123;

// Arrays
let lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years: number[] = [1, 2, 3, 4, 5];

let mezcla: Array<any> = [1, "dos", true, 4, "Juanito"];

// tipos
type alfanumerico = string | number;

let customizado: alfanumerico = 4;




console.log(nombre, numero, verdadero_falso, cualquiera, lenguajes, years, mezcla);

console.log (customizado);