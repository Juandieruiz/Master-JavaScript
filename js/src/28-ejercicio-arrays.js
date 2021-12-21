"use strict";

/* // !Ejercicio
1. Programa que pida 6 numeros por pantalla
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola 
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/


// !EJERCICIO 1 / Pedir 6 numeros
// let listaNumeros = [];

// for (let i = 0; i < 6; i++) {
//   // listaNumeros[i] = parseInt(prompt('Introduce un numero',0));
//   listaNumeros.push(parseInt(prompt("Introduce un numero", 0)));
// }
// !EJERCICIO 2 - Consola

// Mostrar el array por consola
// console.log(listaNumeros);

// !EJERCICIO 3 - Ordenarlos y mostrarlos

// TODO:Mostrar el array en pantalla for in

// document.write('<h1>' + "Lista de Numeros" + '</h1>')
// document.write("<ol>")
// for (let numeros in listaNumeros) {
//     document.write("<li>" + listaNumeros[numeros] + "</li>")
// }
// document.write("</ol>", "<hr>")

// !EJERCICIO 4 - Invertir orden y mostrarlos

// mostrar numeros hacia atras consola
// let numerosAtras = listaNumeros.reverse();

// console.log(numerosAtras);

// mostrar numeros hacia a tras por pantalla
// document.write('<h1>' + "Lista de Numeros" + '</h1>')
// document.write("<ul>")
// for (let numeros in numerosAtras) {
//     document.write("<li>" + numerosAtras[numeros] + "</li>")
// }
// document.write("</ul>", "<hr>")

// !EJERCICIO 5 - Mostrar cuantos elementos hay

// let tamañoLista = listaNumeros.length
// console.log("hay " + tamañoLista + "numeros en la lista")

// !EJERCICIO 6 - Busqueda de Valor con indice

// let busqueda = listaNumeros.indexOf(parseInt(prompt("numero a buscar")))

// console.log(busqueda)

("================================== PARTE 2 ===============================");

function mostrarArray(elementos, textoCustom ="") {
    document.write("<h1> Contenido del array " + textoCustom + " </h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + " </li>");
    });
    document.write("</ul>")
    
    }


// !EJERCICIO 1 / Pedir 6 numeros
let listaNumeros = [];

for (let i = 0; i < 6; i++) {
  // listaNumeros[i] = parseInt(prompt('Introduce un numero',0));
    listaNumeros.push(parseInt(prompt("Introduce un numero", 0)));
}
// !EJERCICIO 2 - Mostrarlos

// array por consola
console.log(listaNumeros);

// TODO:Mostrar el array en pantalla 

mostrarArray(listaNumeros);

// !EJERCICIO 3 - Ordenarlos y Mostrarlos

listaNumeros.sort(function(a,b) {return a-b});
mostrarArray(listaNumeros, "Ordenado")

// !EJERCICIO 4 - Invertir orden y mostrarlos

// mostrar numeros hacia atras 
listaNumeros.reverse();
mostrarArray(listaNumeros, "Revertido");

// !EJERCICIO 5 - Mostrar cuantos elementos hay

document.write("<h3>hay " + listaNumeros.length + " numeros en la lista </h3>");

// !EJERCICIO 6 - Busqueda de Valor con indice

let busqueda = (parseInt(prompt("Busca un numero",0)));
let posicion = listaNumeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1 ) {
    document.write("<h2> ENCONTRADO </h2>");
    document.write("<h2>Posición de la busqueda: " +posicion+"</h2>");
}else{
    document.write("<h2> NO ENCONTRADO </h2>");
}

