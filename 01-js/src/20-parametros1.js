'use strict'

// !Parámetros REST y SPREAD

function listadoFrutas(fruta1,fruta2,...resto_de_frutas){
    console.log("Fruta 1 " + fruta1);
    console.log("Fruta 2 " + fruta2);
    console.log(resto_de_frutas)
}

listadoFrutas("Naranja","Manzana","pera","sandia","coco","banano");

var frutas = ["Naranja","Manzana"]
listadoFrutas(...frutas,"pera","sandia","coco","banano");

