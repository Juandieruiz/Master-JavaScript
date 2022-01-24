// Clase de coche/Molde- POO
var Coche = /** @class */ (function () {
    function Coche() {
    }
    // métodos - funciones
    Coche.prototype.getColor = function () {
        // nos devuelve el valor de la propiedad color
        return this.color;
    };
    // metodo setter que envia un valor a la propiedad color
    Coche.prototype.setColor = function (color) {
        // el valor asignado viajará a traves de la propiedad color
        this.color = color;
    };
    return Coche;
}());
// Creación de Objetos
var coche1 = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
// Asignación de valores a los atributos
coche1.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");
// Mostrar valores de los atributos
console.log("El color del coche 1 es: " + coche1.getColor());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log("El color del coche 3 es: " + coche3.getColor());
