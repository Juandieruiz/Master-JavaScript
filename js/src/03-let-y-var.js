'use strict'

// Pruebas Let y Var

// Prueba con Var(global)
var numero= 40
console.log(numero) // valor 40

if (true) {
    var numero = 50
    // let numero = 50
    console.log(numero) // valor 50
}
console.log(numero) // valor 50

// Prueba con Let(bloque)
var texto = "Curso JS"
console.log(texto) // valor "Curso JS" 

if (true) {
    let texto = "Curso Angular"
    console.log(texto) // valor "Curso Angular"
}
console.log(texto) // valor "Curso JS"