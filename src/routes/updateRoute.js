
const express = require('express');
const updateRouter = express.Router();
const updateController = require('../app/controller/UpdateController');

updateRouter.use('/', updateController.update);

module.exports = updateRouter;
