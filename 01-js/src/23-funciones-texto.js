'use strict'

// Transformacion de texto

var numero = 444;
var texto1 = "Bienvenido al Curso de JavaScript";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
var dato1 = texto1.toUpperCase();
var dato2 = texto2.toLocaleLowerCase();

console.log(typeof dato)
console.log(dato1);
console.log(dato2);

// Calcular Longitud

var nombre="Juan Diego Gomez"; //16
var listaNombres = ["Juan","Míguel"];

console.log(nombre.length);
console.log(listaNombres);

// !Concatenar(unir) textos

// Metodo 1

var textoTotal = texto1 + " " + texto2;
console.log(textoTotal);

// Metodo Concat

var saludo = "Hola, Bienvenido";
var pregunta = "¿Como estás?";

var TextoTotalAlUsuario = saludo.concat(" " + pregunta);

console.log(TextoTotalAlUsuario);