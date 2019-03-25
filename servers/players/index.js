const http = require('http');
const config = require('./config');
const app = require('./app');
const logger = require('../shared/lib/logger');

const server = http.createServer(app);

const infoMessage = {
  label: 'players label',
  message: `HTTP server listening on port ${config.server.port}`,
}

server
  .listen(config.server.port)
  .on('listening', () => logger.info(infoMessage));
