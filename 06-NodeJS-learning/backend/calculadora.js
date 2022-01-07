'use strict';

// Recogemos los parámetros de la petición a partir del segundo parámetro
let params = process.argv.slice(2);

let numero1 = parseInt(params[0]);
let numero2 = parseInt(params[1]);

let plantilla = `
    La suma es ${numero1 + numero2}
    La resta es ${numero1 - numero2}
    La multiplicación es ${numero1 * numero2}
    La división es ${numero1 / numero2}
`;

console.log(plantilla);

console.log("Hola mundo con NodeJS");

