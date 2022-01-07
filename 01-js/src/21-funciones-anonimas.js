"use strict";

// Funciones anónimas
//  - No tienen nombre
//  - No se puede llamar a ellas
//  - No se puede guardar en una variable
//  - No se puede utilizar como parámetro de otra función
//  - No se puede utilizar como valor de retorno de otra función

var pelicula = function (anonima) {
  return "La pelicula es " + anonima;
};

function sumando(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var sumar = numero1 + numero2;

  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

// !callbacks sumaYmuestra, sumaPorDos
//  - Funciones que se ejecutan en un determinado momento
//  - Se pueden pasar como parámetros a otras funciones
//  - Se pueden utilizar como valor de retorno de otras funciones
sumando(
  10,
  8,
  function (dato) {
    console.log("La suma es " + dato);
  },
  function (dato) {
    console.log("La suma por dos es " + dato * 2);
  }
);

// !Función flecha
//  - Es una función anónima y nos facilita la escritura de codigo, ahorrandonos el uso de paréntesis y llaves

sumando(
  10,
  8,
  dato => {
    console.log("La suma es " + dato);
  },
  dato => {
    console.log("La suma por dos es " + dato * 2);
  }
);



