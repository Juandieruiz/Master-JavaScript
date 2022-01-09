'use strict'

// Importamos el modulo de Mongoose(paquete,libreria)
// Ya tenemos un objeto en la variable mongoose
let mongoose = require('mongoose');

let app = require('./app');
let port = 3700;

// le indicamos que es una promesa
mongoose.Promise = global.Promise;
// Conexion a la base de datos con la url de la base de datos
mongoose.connect('mongodb://localhost:27017/Portafolio')
        .then(() => {
            console.log('Conexión satisfactoria con la base de datos');

            // Creación de Servidor
            app.listen(port, () => {
                console.log('Servidor corriendo correctamente en el puerto: ' + port);
            });
        })
        .catch(err => {
            console.log(err);
        });