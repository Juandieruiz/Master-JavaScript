'use strict';
alert("Users en Fetch con JSON Placeholder");

// API REST : Servicio o Back-end que nos devuelve datos en JSON, Con todos lo metodos HTTP.

// Fetch(AJAX) y Peticiones a servicios ( apis rest )

// variable usuarios para guardarlos
let usuarios = [];
// llamamos al servicio(url con datos) es una promesa
fetch('https://jsonplaceholder.typicode.com/users')
    // con (then) recogemos los datos y los almacenamos en data y lo convertimos a JSON
    .then(data => data.json())
    // con este recogemos la data y llamamos a una funcion callback
    .then(data => {
        usuarios.data;
        // TODO: Puedes ver los datos en la página web en Red -> Users
    });