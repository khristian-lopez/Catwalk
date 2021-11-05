const TOKEN = require('../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`

let config = {
  headers: {
    'Authorization': TOKEN
  }
}

module.exports = {
  // return list of reviews for specific product
  getOne: (req, res) => {
    let productId = req.params.product_id;

    axios.get(`${API_URL}/reviews/?product_id=${productId}`, config)
      .then(results => {
        console.log(`Successfully retrieved all reviews for product id: ${productId}`)
        res.status(200).send(results.data)
      })
      .catch(err => {
        console.log('Cannot retrieve reviews')
        res.status(400).send(err)
      })
  },
  // return review metadata for a given product
  getReviewMetadata: (req, res) => {
    let productId = req.params.product_id;

    axios.get(`${API_URL}/reviews/meta?product_id=${productId}`, config)
      .then(results => res.status(200).send(results.data))
      .catch(err => {
        console.log('failed to retrieve metadata: ')
        res.status(401).send(err);
      })
  }

  // TODO: Add a review for given product
  // TODO: Updates a review to show it was found helpful
  // TODO: Updates a review to show it was reported
  
}