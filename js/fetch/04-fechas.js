'use strict';

let fecha = new Date();
let year = fecha.getFullYear();
let month = fecha.getMonth();
let day = fecha.getDate();
let hour = fecha.getHours();
let minutes = fecha.getMinutes();

let textoHora = `
    El año es: ${year}
    El mes es: ${month}
    El día es: ${day}
    La hora es: ${hour}
    `;
console.log(textoHora);
console.log(Math.ceil(Math.random()*1000));