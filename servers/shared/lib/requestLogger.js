const morgan  = require('morgan');
const logger = require('./logger');

//const format = 'combined';
//const format = 'common';
const format = 'dev';
//const format = 'short';
//const format = 'tiny';

const options = {
  stream: {
    write: message => logger.info(message.trim()),
  },
};

module.exports = morgan(format, options);
