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
    
    getProject: function(request,response){
        let projectId = request.params.id;
        
        if(projectId == null) return response.status(404).send({message: 'El proyecto no existe'});

        Project.findById(projectId, (err, project) => {
            if(err) return response.status(500).send({message: 'Error al devolver los datos'});

            if(!project) return response.status(404).send({message: 'El proyecto no existe'});

            return response.status(200).send({
                project
            });
        });
    },

    getProjects: function(req,res){

        Project.find({}).exec((err, projects) => {
            if(err) return response.status(500).send({message: 'Error al devolver los datos'});

            if(!projects) return res.status(404).send({message: 'No hay proyectos que mostrar'});

            return res.status(200).send({projects});            
        });
    },

    updateProject: function(req,res){
        let projectId = req.params.id;
        let update = req.body;

        Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdated) => {
            if(err) return res.status(500).send({message: 'Error al actualizar'});

            if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto'});

            return res.status(200).send({
                project: projectUpdated
            })
        })

    },

    deleteProject: function(req,res){
        let projectId = req.params.id;

        Project.findByIdAndRemove(projectId,(err,projectRemoved) => {
            if(err) return res.status(500).send({message: 'Error al borrar'});

            if(!projectRemoved) return res.status(404).send({message: 'No se pudo borrar el proyecto'});

            return res.status(200).send({
                project: projectRemoved
            });
        });

    },

};

    

module.exports = controller;
