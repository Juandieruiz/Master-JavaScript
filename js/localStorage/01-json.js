'use strict'

// JSON JavaScript Object Notation

let pelicula = {titulo: 'Spiderman',
    year: 2019,
    pais: 'Estados Unidos'
};

let peliculas = [ pelicula,
    {titulo: 'Venom', year: 2020, pais: 'Estados Unidos'},
    {titulo: 'Venom 2', year: 2021, pais: 'Estados Unidos'},
    {titulo: 'Venom 3', year: 2022, pais: 'Estados Unidos'}
];

let caja_peliculas = document.querySelector('#peliculas');
let index;
for ( index in peliculas) {
    let p = document.createElement("p");
    p.append(peliculas[index].titulo," - " ,peliculas[index].year);
    caja_peliculas.append(p);
}