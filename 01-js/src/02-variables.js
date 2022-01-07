'use strict'

// Variables
// Una Variable es un contenedor de información

var pais = "España";
var continente = "Europa";
var antiguedad = 2019;
var pais_y_continente = pais + ' ' + continente;

// Se puede declarar una variable sin inicializarla y modificar el valor, 
// pero no es recomendable
pais = "Colombia";
continente = "America";
antiguedad = 2040;

console.log(pais, continente, antiguedad);

console.log(pais_y_continente);