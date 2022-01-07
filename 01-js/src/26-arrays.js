"use stricts";

// Arrays o Arreglo o Matriz
// Son un conjunto de datos que se pueden almacenar en una sola variable
// y que pueden ser accedidos por un índice numérico
// Se pueden almacenar cualquier tipo de dato

let nombre = "Juan Diego";
let nombres = ["Martin", "Juan", "Diego"];

const lenguajes = new Array("JavaScript","TypeScript","PHP","JAVA","Go","C#","Pascal");

console.log(nombres[2]);
console.log(lenguajes[3]);

// Ver tamaño de array con ->  nombredearray.lenght

// TODO: Ejercicio para sacar un dato del array
// Plus: si el usuario mete un numero erroneo, que le salga un mensaje al usuario

// let elemento = parseInt(prompt("Que lenguaje quieres",0));
// if (elemento >= lenguajes.length) {
//     alert("El numero no es válido, ");
// } else {
//     alert("el lenguaje seleccionado es: " + lenguajes[elemento]);
// }

// TODO: EJERCICIO Mostrar una lista de lenguajes del 2021 en la página index.html

document.write("<h1>Lenguajes de programacion del 2021 con for</h1>");
document.write("<ul>")
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "<br>" + "</li>");
}
document.write("</ul> <hr>")

// !TODO: Repite el ejercicio anterior pero con un bucle forEach
// !forEach
// Es una función callback que recorre un array y ejecuta una acción
// lenguajes.forEach((elemento, index,data) =>{
// });

document.write("<h1>Lenguajes de programacion del 2021 con forEach</h1>");
document.write("<ul>")
lenguajes.forEach((itemDeArray, indice,arrayOriginal) =>{
    document.write("<li>" + indice +"-" + itemDeArray + "</li>");
console.log(arrayOriginal)
});
document.write("</ul>" + "<hr>");

// !TODO: Repite el ejercicio anterior pero con un bucle for in
// !for in
// Es una función callback que recorre un array y ejecuta una acción

document.write("<h1>Lenguajes de programacion del 2021 con for in</h1>");
document.write("<ul>")

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");

//!Busquedas en arrays
//Busqueda de un elemento en un array

let busqueda = lenguajes.find(lenguaje =>  lenguaje === "PHP");

console.log(busqueda);

// Busqueda de indice de un elemento en un array

let busquedaIndice = lenguajes.findIndex(lenguaje =>  lenguaje === "Go");

console.log(busquedaIndice);

// Busqueda 

let precios = [10,20,30,40,50,60,70,80,90,100];

let busquedaNumeros = precios.some(precio => precio < 11);

console.log(busquedaNumeros);
