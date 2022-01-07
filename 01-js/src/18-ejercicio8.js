'use strict'

//TODO: Hacer una Calculadora que nos permita realizar las siguientes operaciones:
// -Sumar, Restar, Multiplicar y Dividir
// -Si metemos un número mal que los pida de nuevo
// -En el cuerpo de la pagina, en una alerta y por la consola, 
//  mostrar los resultados de las operaciones
// Funciones:
var suma;
var resta;
var multiplicacion;
var division;

// Números
var numero1;
var numero2;

numero1 = parseInt(prompt("Introduce el primer número"));
numero2 = parseInt(prompt("Introduce el segundo número"));

// Proceso:
suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;

// while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 <n 0) {
//     numero1 = parseInt(prompt("Introduce el primer número"));
//     numero2 = parseInt(prompt("Introduce el segundo número"));
// }

// para una pagina el salto de linea es br
var resultadopage = 
"La suma es: " + suma + "<br>" + 
"La resta es: " + resta + "<br>" + 
"La multiplicación es: " + multiplicacion + "<br>" + 
"La división es: " + division + "<br>"; 

// para consola el salto de línea es \n
var resultadoconsola = 
"La suma es: " + suma + "\n" + 
"La resta es: " + resta + "\n" + 
"La multiplicación es: " + multiplicacion + "\n" + 
"La división es: " + division + "\n"; 

console.log(resultadoconsola);
alert(resultadoconsola);
document.write(resultadopage);