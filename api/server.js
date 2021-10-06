const express = require('express');
const monstersRouter = require('./monsters/monster-router');


const server = express();

server.use(express.json());

server.use('/api/monsters', monstersRouter);

module.exports = server;
