'use strict';

let express = require('express');
let bodyParser= require('body-parser');

let app = express();

// Cargar archivos de rutas


// Middlewares
// Para que el servidor pueda entender los datos que nos llegan en formato JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS

// Rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Pagina de inicio desde NodeJS</h1>"
    );
});
app.get('/test', (req, res) => {
    res.status(200).send({
        test : 'Hola Mundo desde mi API de NodeJS /test'
    });
});

// Exportar modulo
module.exports = app;