'use strict'

// Importamos el modulo de Mongoose(paquete,libreria)
let mongoose = require('mongoose');

// Conectamos a la base de datos
mongoose.Promise = global.Promise;
// Conexion a la base de datos con la url de la base de datos
mongoose.connect('mongodb://localhost:27017/Portafolio')
        .then(() => {
            console.log('Conexión satisfactoria con la base de datos');
        })
        .catch(err => {
            console.log(err);
        });