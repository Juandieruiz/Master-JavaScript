'use strict'

// Metodo de busqueda
// Busca un elemento en un array
// Devuelve el indice del elemento
// Si no lo encuentra devuelve -1
// Si el elemento no es un array devuelve -1
// Si el elemento es un array devuelve -1
// Si el elemento es un array y no tiene elementos devuelve -1
// Si el elemento es un array y tiene elementos devuelve el indice del primer elemento
// Si el elemento es un array y tiene mas de un elemento devuelve el indice del primer elemento

var textoPrueba = "Hola, Mi nombre es Juan Diego y tengo 21 años, actualmente soy programador de Software Full Stack, Aprendiendo distintos lenguajes, actualmente me encuentro trabajando en Malaga en la empresa llamada ingenia"
var busquedaPorPalabra = textoPrueba.indexOf("ingenia");
var busqueda = textoPrueba.lastIndexOf("actualmente");
var search = textoPrueba.search("Holaa");
var match = textoPrueba.match(/actualmente/gi);
var sustraer = textoPrueba.substr(19,32);
var caracter = textoPrueba.charAt(3)
var includes = textoPrueba.includes("array")

console.log(busquedaPorPalabra);
console.log(busqueda);
console.log(search);
console.log(match);
console.log(sustraer);
console.log(caracter);
console.log(includes);

// Funciones de reemplazo
// Reemplaza una cadena por otra
// Devuelve la cadena reemplazada
// Si no se encuentra la cadena devuelve la cadena original
// Si la cadena original es un array devuelve la cadena original
// Si la cadena original es un array y no tiene elementos devuelve la cadena original
// Si la cadena original es un array y tiene elementos devuelve la cadena reemplazada
// Si la cadena original es un array y tiene mas de un elemento devuelve la cadena reemplazada

let textoBase = "    Bienvenidos al software, donde debemos analizarlo y reemplazarlo";
let textoReemplazo = textoBase.replace("software", "canal de programacion");
console.log(textoBase);
console.log(textoReemplazo);

let cortarTexto = textoBase.slice(10);
console.log(cortarTexto);

let recortarPalabras = textoBase.split(" ");
console.log(recortarPalabras);

let recortarEspacios = textoBase.trim();
console.log(recortarEspacios);


