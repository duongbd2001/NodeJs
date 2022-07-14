const express = require('express');
const addNewRouter = express.Router();
const addNewController = require('../app/controller/AddController');

addNewRouter.get('/', addNewController.addNew);
addNewRouter.post('/create', addNewController.create);

module.exports = addNewRouter;