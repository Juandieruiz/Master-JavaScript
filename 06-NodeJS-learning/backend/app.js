'use strict';

let express = require('express');
let bodyParser= require('body-parser');

let app = express();

// Cargar archivos de rutas
let project_routes = require('./routes/project');

// Middlewares
// Para que el servidor pueda entender los datos que nos llegan en formato JSON
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Configurar cabeceras y cors en NodeJS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



// Rutas
app.use('/api', project_routes);

// Exportar modulo
module.exports = app;