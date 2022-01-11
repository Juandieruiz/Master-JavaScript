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
        type: String
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documents de la coleccion