'use strict'

// Switch

var edad=45;
var mensaje="";

switch (edad) {
    case 18:
        mensaje="Eres mayor de 18";
        break;
    case 25:
        mensaje="Eres adulto";
        break;
    case 45:
        mensaje="Crisis de los 40";
        break;
        case 75:
        mensaje="Eres viejo"
        break;
    default: mensaje="Quien eres"
        break;
    }

    console.log(mensaje);