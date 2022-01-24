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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// !MODULOS INTERNOS
var Tienda;
(function (Tienda) {
    var Ropa = /** @class */ (function () {
        function Ropa(title) {
            this.title = title;
            alert(' Tienda de Ropa' + title);
        }
        return Ropa;
    }());
    Tienda.Ropa = Ropa;
    var Informatica = /** @class */ (function () {
        function Informatica(title) {
            this.title = title;
            alert('Tienda de Tecnología ' + title);
        }
        return Informatica;
    }());
    Tienda.Informatica = Informatica;
})(Tienda || (Tienda = {}));
var Informatica = Tienda.Informatica;
var cargar_informatica = new Informatica("JuandInformatica");
// !DECORADOR
// El Decorador arranque agregara un nuevo metodo/funcion a la clase
function arranque(lanzar) {
    return function (target) {
        // Es una funcion que devuelve un console log
        target.prototype.lanzamiento = function () {
            alert(lanzar);
        };
    };
}
// Herencia
// Creamos un programa padre
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.getVersion;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa = __decorate([
        arranque("Lanzamiento del Programa a la aplicación")
    ], Programa);
    return Programa;
}());
// Decorador
var programa = new Programa();
programa.lanzamiento();
// Creamos un programa hijo en el que instanciamos el padre
var EditorVideo = /** @class */ (function (_super) {
    __extends(EditorVideo, _super);
    function EditorVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorVideo.prototype.getTimeline = function () {
        return this.timeline;
    };
    // Creamos un metodo para mostrar los datos del programa
    EditorVideo.prototype.getAllData = function () {
        return this.nombre + " - " + this.version + " - " + this.timeline;
    };
    return EditorVideo;
}(Programa));
// Creamos un objeto de tipo editor video que contiene los atributos de la clase padre e hijo
var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());
// Logica de formulario
var programas = [];
function guardar() {
    // Obtenemos los valores del formulario
    var nombre = document.getElementById("nombre").value.toString();
    // Creamos un nuevo objeto 
    var programa = new Programa();
    // Asignamos los valores al objeto
    programa.setNombre(nombre);
    programa.setVersion(1);
    // Añadimos el objeto a un array
    programas.push(programa);
    // Recorremos el Array de programas
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    // Mostramos los datos en el HTML
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
}
