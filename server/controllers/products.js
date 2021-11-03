const TOKEN = require('../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`

module.exports = {
  getAll: () => {

  },

  getOne: () => {

  },

  getRelatedProductIds: (req, res) => {

    let productId = req.params.product_id;

    let config = {
      headers: {
        'Authorization': `${TOKEN}`
      }
    }

    axios.get(`${API_URL}/products/${productId}/related`, config)
      .then(results => {
        Promise.all(
          results.data.map(id => {
            return axios.get(`${API_URL}/products/${id}`, config)
              .then(results => results.data)
              .catch(err => console.log('failed to retrieve a product: ', err));
          })
        )
          .then(results => {
            console.log('retrieved all related products from api')
            res.send(results)
          })
          .catch(err => console.log('failed to retrieve products: ', err));
      })
      .catch(err => {
        res.status(401).send(err);
        console.log(err);
      });
  }
}
