'use strict'

// DOM - Document Object Model
// Es una representación del documento HTML en memoria.
// Es un objeto global que contiene todos los elementos del documento HTML.

function cambiaColor(color){
    caja.style.background = color;
}

// TODO: Conseguir elementos con un ID Concreto

// let caja = document.getElementById("#micaja");
let caja = document.querySelector("#micaja");

caja.innerHTML = "TEXTO EN LA CAJA DESDE JS"
caja.style.background = "red" ;
caja.style.padding = "20px" ;
caja.style.color = "white";
caja.style.textAlign= "center";

// TODO: Conseguir elementos por su etiqueta

// !Recorrer etiquetas div con for in
// append (añade antes)  prepend(añade despues)

let todosLosDivs = document.getElementsByTagName('div');

let seccion = document.querySelector("#miseccion");
let hr = document.createElement("hr");

let valor;

    for (valor in todosLosDivs){
        if (typeof todosLosDivs[valor].textContent == "string") {
            let parrafo = document.createElement("p");
            let texto = document.createTextNode(todosLosDivs[valor].textContent);
            parrafo.append(texto);
            seccion.append(parrafo);
        }
    }

seccion.append(hr)

// let todosLosDivs = document.getElementsByTagName('div');

// let contenido = todosLosDivs[2].textContent;
// console.log(contenido);
// Manipular texto

// let editandoTexto = todosLosDivs[2];
// editandoTexto.innerHTML  = "Nuevo texto para el div 2";
// editandoTexto.style.background = "green";



// TODO: Conseguir elementos por su clase css
let divsRojos = document.getElementsByClassName('rojo');
let divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

let div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
    divsRojos[div].style.background = "red";
    }
}

// !Query Selector
// Selecciona el primer elemento que coincida con el selector
// Selecciona todos los elementos que coincidan con el selector

let id= document.querySelector("#encabezado");
console.log(id);

let claseRojo= document.querySelector(".rojo");
console.log(claseRojo);

let etiqueta= document.querySelector("div");
console.log(etiqueta);