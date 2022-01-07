'use strict'

// BOM
// The Browser Object Model - (BOM) es una API
// que permite acceder a los datos del navegador.

function getBom() {
console.log(window.innerWidth); // ANCHO
console.log(window.innerHeight); // ALTO
}

function getBom2() {
console.log(screen.width); // ANCHO
console.log(screen.height); // ALTO
console.log(screen.colorDepth); // COLOR DEPTH
console.log(screen.availWidth); // ANCHO DISPONIBLE
console.log(screen.availHeight); // ALTO DISPONIBLE
console.log(screen.pixelDepth); // PIXEL DEPTH
console.log(screen.availLeft); // POSICION IZQUIERDA
console.log(screen.availTop); // POSICION SUPERIOR
console.log(screen.availWidth); // ANCHO DISPONIBLE
console.log(screen.availHeight); // ALTO DISPONIBLE
console.log("=================");
}

function redirect(url) {
window.location.href = url;
}

function abrirVentana(url) {
window.open(url,"","width=400, height=300");
}
