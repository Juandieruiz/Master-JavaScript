'use strict'
// Condicionales
// Si A es igual a B entonces haz algo

var edad1=7;
var edad2=25;

// Si pasa esto
if (edad1>edad2) {
    // Ejecuta esto
    console.log("Edad 1 es superior");
}else{
    // Ejecuta esto
    console.log("Edad 2 es superior");
}

//Ejemplo
var edad=28;
var nombre="Juan";

if (edad>=18) {
    console.log("Es mayor de edad");
    if (edad <= 33) {
        console.log("Eres millenial");
        }else if (edad =>55) {
            console.log("Eres anciano");
        }
}else{
    console.log("Es menor de edad");
}

/* Operadores lógicos
&& - AND
|| - OR
Negación - !
*/
var year=2018;
if (year!=2016) {
    console.log("El año no es 2016, realmente es " + year);

}

// AND
if (year >= 2000 && year <= 2020 != 2018 ) {
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR
if (year == 2008 || (year >= 2018 && year <= 2028)) {
    console.log("El año acaba en 8");
}else{
    console.log("El año no acaba en 8");
}

