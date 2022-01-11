'use strict';
let Project = require('../models/project');

let controller = {
    
    home: function(req,res){
        return res.status(200).send({
            message: 'Home desde el controlador de project'
        });
    },
    test: function(req,res){
        return res.status(200).send({
            message: 'Soy el metodo test del controlador de project'
        });
    },

    // Guardar un nuevo proyecto
    saveProject: function(req,res){
        // Creamos un objeto de project
        let project = new Project();

        let params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.technologies = params.technologies;
        project.year = params.year;
        project.image = null;
        
        // guardar objeto en base de datos
        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: 'Error al guardar el proyecto'});
        
            if(!projectStored) return res.status(404).send({message: 'No se pudo guardar el proyecto'});

            return res.status(200).send({project: projectStored});
        });
        
    },

};

    

module.exports = controller;
