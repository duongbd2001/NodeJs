const express = require('express');
const deleteRouter = express.Router();
const deleteController = require('../app/controller/DeleteController');

deleteRouter.use('/', deleteController.delete);

module.exports = deleteRouter;
