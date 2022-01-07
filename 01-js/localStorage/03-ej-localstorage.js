'use strict'
    // !AGREGAR PELICULAS /CREATE
let formularioA = document.querySelector('#formPeliculas');

    // Recuperamos el formulario a partir del submit y guardamos el valor en titulo
    formularioA.addEventListener('submit', () => {
        let titulo = document.querySelector('#addPelicula').value;
        // Si el titulo tiene mas de una letra que sea agregado al LocalStorage
        if (titulo.length >= 1) {
            localStorage.setItem(titulo, titulo);
        }
    });
    // declaramos donde sera mostrada la lista
    let ul = document.querySelector('#peliculas-list');

    // !MOSTRAR PELICULAS 
    // Array forIn Para recorrer Peliculas y un IF para verificar que sea string
    for (const i in localStorage) {

        if (typeof localStorage[i] == 'string') {
            // declaramos li para crear un elemento tipo <li>
            let li = document.createElement("li");
            // enviamos nuestro local storage para ser mostrado
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    // !BORRAR PELICULAS /DELETE
    let formularioB = document.querySelector('#formBorrarPeliculas');

     // Recuperamos el formulario a partir del submit y guardamos el valor en titulo
    formularioB.addEventListener('submit', () => {
        let titulo = document.querySelector('#borrarPelicula').value;
        // Si el titulo tiene mas de una letra que sea agregado al LocalStorage
        if (titulo.length >= 1) {
            localStorage.removeItem(titulo);
        }
    });
