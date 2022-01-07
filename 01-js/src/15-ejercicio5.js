'use strict'

//TODO: Muestre todos los numeros divisores de un numero introducido por teclado
// Un divisor es aquel numero, que al ser dividido por otro numero el resto dará cero
var numero1;

numero1 = parseInt(prompt("Introduce un numero", 0));

for (var i = 1; i <= numero1; i++) {
    if (numero1 % i == 0) {
        console.log(i);
    }
}