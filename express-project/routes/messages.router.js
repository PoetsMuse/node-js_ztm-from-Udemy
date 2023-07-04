const express = require('express');

const messagesController = require('../controllers/messages.controller');


const messagessRouter = express.Router();

messagessRouter.get('/', messagesController.getMessages);
messagessRouter.post('/', messagesController.postMessage);

module.exports = messagessRouter;


