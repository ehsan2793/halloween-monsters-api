const express = require('express');
const monstersRouter = require('./monsters/monster-router');

const server = express();

server.use(express.json());

server.use('/api/monsters', monstersRouter);

server.get('/', (req, res) => {
    res.send(
        "<div><h1>Welcome to Hollowen Monsters Api</h1><p>click the button below to see the data</p><button> <a href='/api/monsters'> Monsters </a> </button></div>",
    );
});

module.exports = server;
