"use strict";
exports.__esModule = true;
exports.Coche = void 0;
// Clase (molde de objeto) Coche
var Coche = /** @class */ (function () {
    // Métodos (funciones o acciones del objeto)  
    // CONSTRUCTOR Se ejecuta cuando creamos una instancia de la clase
    function Coche(color, model, owner, price, autopilot) {
        this.color = color;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.autopilot = autopilot;
    }
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    return Coche;
}());
exports.Coche = Coche;
// Creamos un objeto de la clase Coche
var cocheY = new Coche("rojo", "Model Y", "Tesla", 100000, true);
cocheY.setColor("Blue");
console.log(cocheY);
//  !NO PUEDES ACCEDER A LAS PROPIEDAS DE UN OBJETO PRIVADO
// let cocheX = new Coche();
// cocheX.color = "Black";
// cocheX.model = "Model X";
// cocheX.owner = "Tesla";
// cocheX.price = 45000;
// cocheX.autopilot = false;
