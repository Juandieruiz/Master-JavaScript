// Clase de coche/Molde- POO
var Coche = /** @class */ (function () {
    // constructor de objetos con valores por defecto
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.modelo = "TESLA GENERICO";
        this.color = "Blanco";
        this.velocidad = 0;
        // comprobamos si el modelo es nulo
        if (modelo == null) {
            this.modelo = "TESLA GENERICO";
        }
        else {
            this.modelo = modelo;
        }
    }
    // !GETTER Y SETTER
    // métodos - funciones
    // ? getModelo - SetModelo
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    // ? getColor - SetColor
    Coche.prototype.getColor = function () {
        // nos devuelve el valor de la propiedad color
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        // el valor asignado viajará a traves de la propiedad color
        this.color = color;
    };
    // ? Funciones acelerar y frenar
    // mnetodos - funciones a realizar
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    // ? getVelocidad - SetVelocidad
    Coche.prototype.getVelocidad = function () {
        // nos devuelve el valor de la propiedad velocidad
        return this.velocidad;
    };
    return Coche;
}());
// Creación de Objetos
var coche1 = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
// Asignación de valores color a los atributos
coche1.setColor("Rojo");
coche2.setColor("Azul");
coche3.setColor("Verde");
// Asignación de valores velocidad a los atributos
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche1.acelerar();
coche2.acelerar();
coche1.frenar();
// Asignación de valores modelo a los atributos
coche1.setModelo("Tesla X");
// Mostrar valores de los atributos
console.log("El color del coche 1 es: " + coche1.getColor());
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("La velocidad del coche 1 es: " + coche1.getVelocidad());
console.log('____________________________________________');
console.log("La velocidad del coche 2 es: " + coche2.getVelocidad());
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("El color del coche 2 es: " + coche2.getColor());
console.log('____________________________________________');
console.log("El color del coche 3 es: " + coche3.getColor());
console.log("El modelo del coche 1 es: " + coche1.getModelo());
console.log("La velocidad del coche 3 es: " + coche3.getVelocidad());
