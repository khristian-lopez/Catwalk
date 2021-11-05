const TOKEN = require('../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`

module.exports = {
  getAll: () => {

  },

  getOne: () => {

  },

  getReviewMetadata: (req, res) => {
    let productId = req.params.product_id;

    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }

    axios.get(`${API_URL}/reviews/meta?product_id=${productId}`, config)
      .then(results => res.status(200).send(results.data))
      .catch(err => {
        console.log('failed to retrieve metadata: ')
        res.status(401).send(err);
      })
  }
}
