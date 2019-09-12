const express = require('express');
const recipesRouter = require('./recipes/recipesRoutes.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.send('<h1>Recipes API</h1>');
});

module.exports = server;
