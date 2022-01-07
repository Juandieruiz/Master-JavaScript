'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

console.log("El resultado de la operación es: " + suma);
console.log("El resultado de la operación es: " + resta);
console.log("El resultado de la operación es: " + multiplicacion);
console.log("El resultado de la operación es: " + division);

// Tipos de Datos
var numero_entero = 44;
var cadena_texto = "Hola 'que' Tal";
var verdadero_o_falso = true;

var numero_falso = "33";

// ParseInt Para convertir una cadena de texto a un número entero
// ParseFloat Para convertir una cadena de texto a un número decimal
console.log(parseInt(numero_falso) + 7);

// los suma por que son numeros enteros
console.log(numero_entero + 7);
// Convierte el numero entero a String y nos muestra 447
console.log(String(numero_entero) + 7);

// Type Of

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
