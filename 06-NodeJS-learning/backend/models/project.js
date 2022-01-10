'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ProjectSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    technologies: {
        type: Array
    },
    year: {
        type: Number,
        required: true
    }
});

module.exports = moongose.model('Project', ProjectSchema);
// projects --> guarda los documents de la coleccion