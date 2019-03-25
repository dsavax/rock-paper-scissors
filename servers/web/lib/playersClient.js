const httpClient = require('./httpClient');

module.exports = (config) => {
  /**
   * Create a player.
   *
   * @param {string} requestId - X-Request-Id.
   * @returns {Promise<Player>} New player.
   */
  function create(requestId) {
    return httpClient(
      requestId,
    {
      uri: `${config.protocol}://${config.host}:${config.port}/api/v1/players`,
      method: 'POST',
    });
  }

  /**
   * Get a player by ID.
   *
   * @param {string} requestId - X-Request-Id.
   * @param {integer} id - target identifier.
   * @returns {Promise<Player>} Player matched by id.
   */
  function get(requestId, id) {
    return httpClient(
      requestId, 
      {
      uri: `${config.protocol}://${config.host}:${config.port}/api/v1/players/${id}`,
      method: 'GET',
      });
  }

  return {
    create,
    get,
  };
};
