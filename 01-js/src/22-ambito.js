'use strict'

// !Ambito de las variables
// !Las variables definidas dentro de una función, no pueden ser accedidas fuera de la función
// !Las variables definidas fuera de una función, pueden ser accedidas dentro de la función

// Recuerda para convertir datos a String con el método toString()

var numero= 105;
var texto= "Hola Mundo, Soy una Variable Global";

function holaMundo(){
    var hola_mundo = "Hola Mundo, Soy una Variable dentro de una función"
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo)
}

holaMundo();

console.log(hola_mundo);
console.log(texto)