'use strict'

// !Funciones
// Una función es un conjunto de instrucciones que se pueden ejecutar
// de manera repetitiva.

    // !Parámetros
    // Parámetros son valores que se pasan a la función para que la función
    // pueda trabajar con ellos.

function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
    document.write("División: " + (numero1 / numero2) + "<br/>");
}



// !Definición de una función
function calculadora(numero1, numero2, mostrar = false) {

    if (mostrar == false) {
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2);
    }
}

// !Llamada a la función
calculadora(10, 10);
calculadora(10, 15, true);
calculadora(8, 12, true);


// for (var i = 0; i < 10; i++) {
//     console.log("Vuelta: " + i);
//     calculadora(i, 10);
// }
