const TOKEN = require('../../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`;

module.exports = (productId) => {
  let config = {
    headers: {
      'Authorization': TOKEN
    }
  }

  return axios.get(`${API_URL}/products/${productId}/styles`, config)
    .then(results => {
      return results.data.results[0];
    })
    .catch(err => {
      console.error('unable to obtain product styles');
    })
}

module.exports(42369);