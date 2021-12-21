'use strict'

// TODO: Tabla de Multiplicar de un número introducido por pantalla

var number;

number = parseInt(prompt("¿De que número deseas la tabla?", 0));
document.write("<h1>Tabla de multiplicar del número " + number + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + number * i + "<br>");
}

// PLUS: TODAS LAS TABLAS DE MULTIPLICAR

for (var s = 1; s <= 10; s++) {
document.write("<h1>Tabla de multiplicar del número " + s + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + s * i + "<br>");
    }
}