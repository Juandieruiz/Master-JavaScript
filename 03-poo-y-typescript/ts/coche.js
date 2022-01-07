var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Creamos un objeto de la clase Coche
var cocheY = new Coche("rojo", "Model Y", "Tesla", 100000, true);
console.log(cocheY);
// Clase hija
var CocheElectrico = /** @class */ (function (_super) {
    __extends(CocheElectrico, _super);
    function CocheElectrico(color, model, owner, price, autopilot, battery) {
        var _this = _super.call(this, color, model, owner, price, autopilot) || this;
        _this.battery = battery;
        return _this;
    }
    return CocheElectrico;
}(Coche));
var cocheE = new CocheElectrico("azul", "Model X", "Tesla", 100000, true, 100);
console.log(cocheE);
//  !NO PUEDES ACCEDER A LAS PROPIEDAS DE UN OBJETO PRIVADO
// let cocheX = new Coche();
// cocheX.color = "Black";
// cocheX.model = "Model X";
// cocheX.owner = "Tesla";
// cocheX.price = 45000;
// cocheX.autopilot = false;
