const express = require('express');
const addNewRouter = express.Router();
const addNewController = require('../app/controller/AddController');

addNewRouter.use('/', addNewController.addNew);

module.exports = addNewRouter;