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

// CORS

// Rutas
app.use('/api', project_routes);

// Exportar modulo
module.exports = app;