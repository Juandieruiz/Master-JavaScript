'use strict'

// Array,Arreglo,Mátrices Multidimensional
// =====================
// Array multidimensional es una forma de almacenar múltiples Arrays en un solo Array.
// Es muy útil cuando desea almacenar múltiples Arrays en un solo Array.
// Por ejemplo, desea almacenar los nombres de las peliculas en un Array y
// la categoria de las peliculas en otro Array.
// Puede almacenar ambos Array en un solo Array llamado cine.
// Puede acceder a los elementos del Array utilizando el número de índice.
// El número de índice comienza desde 0.

let categorias = ['Accion','Terror','Comedia'];
let peliculas = new Array("Dispara o muere","Muertes","Super Risas");

let cine = [categorias,peliculas];

// Para acceder a los elementos del Array multidimensional, utiliza el número de índice.
// console.log(cine[1][2]) (1)Peliculas  (2)Super Risas

// !Para agregar elementos en un Array multidimensional, utiliza el número de índice.

// let nuevaPelicula= "";

// do{
//     nuevaPelicula = prompt("Introduce la nueva pelicula:");
//     peliculas.push(nuevaPelicula);

// }while(nuevaPelicula != "ACABAR");
// peliculas.pop();

// console.log(peliculas);

// !Para encontrar la posición de un elemento en un Array multidimensional,
// !utiliza el número de índice o el nombre del elemento.

let busqueda = peliculas.indexOf("Muertes");
console.log(busqueda);

// !Para eliminar un elemento de un Array multidimensional, utiliza el número de índice.

if (busqueda > -1){
    peliculas.splice(busqueda,1);
}
console.log(peliculas);

// !Para convertir un array a un string, utiliza el método join.

let peliculas_string = peliculas.join();
console.log(peliculas_string);

// !Para convertir un string a un array, utiliza el método split.

let textoAConvertir = "texto1, texto2, texto3";
console.log(textoAConvertir);
let arrayTexto = textoAConvertir.split(", ");
console.log(arrayTexto);

// !Ordenaremos un Array multidimensional, utiliza el método sort.

let numeros = [4,3,1,2,6,5];
numeros.sort();
console.log(numeros);

// !Método reverse

numeros.reverse();
console.log(numeros);
