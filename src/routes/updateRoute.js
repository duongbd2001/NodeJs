
const express = require('express');
const updateRouter = express.Router();
const updateController = require('../app/controller/UpdateController');

updateRouter.get('/:id/edit', updateController.update);
updateRouter.post('/:id/modify', updateController.modify);

module.exports = updateRouter;
