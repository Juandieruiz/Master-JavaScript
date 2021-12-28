// Alcance de variables
// let y var
// let es a nivel de bloque
var master = "Juan";
var mind = "Perez";
// Var es a nivel de archivo
var numero1 = 10;
var numero2 = 12;
// !Prueba
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
// Las Diferencias entre let y var son:
// let:
// - Es a nivel de bloque
// - Solo se puede usar dentro de un bloque
// - No se puede redeclarar
// Var:
// - Es a nivel de archivo
// - Se puede redeclarar
// - Se puede usar fuera de un bloque
