'use strict'

// TODO: Hacer un programa que nos diga si un numero par o impar
/*
Requisitos:
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/
var number = parseInt(prompt("Introduce un numero", 0));

while(isNaN(number)) {
    number = parseInt(prompt("DATO INCORRECTO, Introduce un numero", 0));
}

if (number % 2 == 0) {
    alert("El numero es par");
}else{
        alert("es impar");
}