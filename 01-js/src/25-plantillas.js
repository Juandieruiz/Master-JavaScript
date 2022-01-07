'use strict'

// Plantillas de Texto

var nombre = prompt('¿Escribe tu NOMBRE?');
var apellidos = prompt('¿Escribe tu APELLIDO?');

let texto = "Mi nombre es: " + nombre + "<br>" + "Mis apellidos son: " + apellidos;
let plantillaTexto = `
    <h1>Hola</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mis apellidos son: ${apellidos}</h3>

    <p>El usuario: ${nombre} ${apellidos}, acepta los terminos y condiciones.</p>
`;
document.write(texto);
document.write(plantillaTexto);