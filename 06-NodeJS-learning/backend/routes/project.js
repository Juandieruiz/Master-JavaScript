'use strict';

let express = require('express');
const { uploadImage } = require('../controllers/project');
let ProjectController = require('../controllers/project');

let router = express.Router();

// middleware para subir imagen multiparty

let multipart = require('connect-multiparty');
let multipartMiddleware = multipart({ uploadDir: './uploads' });

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/get-projects',ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.removeProject);

// subir imagen con multiparty
router.post('/upload-image/:id',multipartMiddleware, ProjectController.uploadImage);

//subir imagen a proyecto
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;