const server = require('./api/server');

const PORT = process.env.PORT || 5000;

server.listen(port, () => console.log(`Running on port: ${PORT}...`));
