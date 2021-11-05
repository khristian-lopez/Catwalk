const getAverageRating = require('./helpers/getAverageRating.js');
const TOKEN = require('../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`

module.exports = {
  getAll: (req, res) => {
    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }
    axios.get(`${API_URL}/products/`, config)
      .then(results => {
        console.log('all products successfully obtained')
          res.status(200).send(results.data)
      })
        .catch(err => {
          console.error('unable to obtain desired product')
          res.status(400).send(err)
      })
  },

  getOne: (req, res) => {
    let productId = req.params.product_id;
    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }
    //retrieve all product level information for a specific product id
    axios.get(`${API_URL}/products/${productId}`, config)
      .then(results => {
        console.log('product successfully obtained: ', results.data)
        res.status(200).send(results.data)
      })
      .catch(err => {
        console.error('unable to obtain desired product')
        res.status(400).send(err)
      })
  },

  getProductStyles: (req, res) => {
    let productId = req.params.product_id;
    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }
    //retrieve styles for specific product id
    axios.get(`${API_URL}/products/${productId}/styles`, config)
      .then(results => {
        console.log('styles successfully obtained')
          res.status(200).send(results.data.results)
        })
        .catch(err => {
          console.error('unable to obtain product styles')
          res.status(400).send(err)
        })
  },

  getRelatedProductIds: (req, res) => {

    let productId = req.params.product_id;

    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }

    // retrieve all productIds related to current productId
    axios.get(`${API_URL}/products/${productId}/related`, config)
      .then(results => {
        // Promise.all is taking an array of API calls with axios
        // for each retrieved productId
        Promise.all(
          // map over each retrieved productId and make an API call
          // to retrieve product data
          results.data.map(id => {
            return axios.get(`${API_URL}/products/${id}`, config)
              .then(results => {
                let product = results.data;

                return product;
              })
              .catch(err => console.log('failed to retrieve a product: ', err));
          })
        )
        // Promise.all waits until all API calls resolve then returns
        // an array of the resolved values
          .then(results => {
            console.log('retrieved all related products from api');
            res.status(201).send(results);
          })
          .catch(err => console.log('failed to retrieve products: ', err));
      })
      .catch(err => {
        res.status(401).send(err);
        console.log(err);
      });
  }
}
