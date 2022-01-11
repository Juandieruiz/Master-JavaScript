'use strict';

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
    }
};

module.exports = controller;
