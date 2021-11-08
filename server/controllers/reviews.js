const getAverageRating = require('./helpers/getAverageRating.js');
const getDefaultStyle = require('./helpers/getDefaultStyle.js');
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
      .then(results => {
        let product = results.data;
        // retrieve average ratings and add as prop to product
        return getAverageRating(product.product_id)
          .then(avgRating => {
            product['avgRating'] = avgRating || null;
            // retrieve default style and add as prop to product
            return getDefaultStyle(product.product_id)
              .then(defaultStyle => {
                product['defaultStyle'] = defaultStyle;
                return product;
              })
          })
      })
      .then(results => res.status(200).send(results))
      .catch(err => {
        console.log('failed to retrieve product metadata: ')
        res.status(401).send(err);
      })
  }
}
