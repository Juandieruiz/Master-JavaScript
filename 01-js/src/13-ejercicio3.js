'use strict'

// TODO: Hacer un programa para ver todos los numeros que hay
// TODO:  entre dos numeros introducidos por el usuario

var numero1;
var numero2;

numero1 = parseInt(prompt("Introduce el primer numero", 0));
numero2 = parseInt(prompt("Introduce el segundo numero " + 0));

document.write("De " + numero1 + " a " + numero2 + " hay " + " estos numeros " + "<h2>");

for (var i = numero1; i <= numero2; i++) {
    document.write(i + "<br> ");
}
