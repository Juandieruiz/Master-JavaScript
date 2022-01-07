'use strict'

/* Programa que pida dos numeros y que nos diga cual es mayor, el menos y si son iguales */
// PLUS: Si los numeros no son un numero o son menores o iguales a cero, vuelva a pedirlos
var numero1;
var numero2;

numero1 = prompt("Introduce el primer numero",0);
numero2 = prompt("Introduce el segundo numero",0);

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = prompt("Introduce el primer numero",0);
    numero2 = prompt("Introduce el segundo numero",0);
}
    
if (numero1 == numero2) {
    console.log("Los numeros son iguales");
}else if (numero1 > numero2) {
    console.log("El numero mayor es " + numero1);
    console.log("El numero menor es " + numero2)
}else if (numero1 > numero2) {
    console.log("El numero mayor es " + numero2);
    console.log("El numero menor es " + numero1)
}else{
    alert("Introduce un numero correcto");
}
