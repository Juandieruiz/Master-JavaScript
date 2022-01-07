'use strict'

// TODO: Mostrar todos los números impares que hay 
// TODO: entre dos números introducidos por el usuario

var numero1;
var numero2;


numero1 = parseInt(prompt("Introduce el primer número", 0));
numero2 = parseInt(prompt("Introduce el segundo número", 0));

// Opcion 1
for(var i = numero1; i <= numero2; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// Opcion 2

while (numero1 <= numero2){
    numero1++;
    if(numero1 % 2 != 0){
        console.log(numero1);
    }
}
    
