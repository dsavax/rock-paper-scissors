const app = require('./app');
const http = require('http');
const config = require('./config');
const logger = require('../shared/lib/logger');

const server = http.Server(app);

//logger.info('Found %s at %s', 'error', new Date());
//logger.info('Found %s at %s', 'error', new Error('chill winston'));
//logger.info('Found %s at %s', 'error', /WUT/);
//logger.info('Found %s at %s', 'error', true);
//logger.info('Found %s at %s', 'error', 100.00);
//logger.info('Found %s at %s', 'error', ['1, 2, 3']);

//logger.warn(new Error('Error passed as info'));
//logger.log('error', new Error('Error passed as message'));

//logger.warn('Maybe important error: ', new Error('Error passed as meta'));
//logger.log('error', 'Important error: ', new Error('Error passed as meta'));

//logger.error(new Error('Error as info'));

const infoMessage = {
  //level: 'info',                    // level is  for logger.log, not for logger.info()
  label: 'label test',
  message: `HTTP server listening on port ${config.server.port}`,
}

server
  .listen(config.server.port)
  .on('listening', () => logger.info(infoMessage));
