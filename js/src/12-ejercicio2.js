'use strict'

// TODO: Pedirle al usuario dos numeros y mostrar por consola el resultado de la suma y la media

// var numero1 = 0;
// var numero2 = 0;

// numero1 = parseInt(prompt("Introduce un numero: "));
// numero2 = parseInt(prompt("Introduce otro numero: "));

// var suma= numero1 + numero2;
// console.log("La suma de los numeros es: "+ suma);

// var media= (numero1 + numero2)/2;
// console.log("La media de los numeros es: "+ media);

// TODO:Utilizar un Bucle, mostrar la suma y la media de los numeros introducidos
// TODO:hasta introducir un numero negativo y ahí mostrar el resultado */

var suma= 0;
var contador=0;
do {
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo: ",0));
    if (isNaN(numero)) {
        numero= 0;
    }else if(numero >= 0){
        suma = suma + numero;
        // suma += numero;
        contador++;
        console.log(contador);

    }
    
} while (numero >= 0);

alert("La suma es: "+ suma);
alert("La media es: "+ (suma/contador));