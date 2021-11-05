const TOKEN = require('../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`;

module.exports = {
  getAll: () => {
    let config = {
      headers: {
        'authorization': TOKEN
      }
    }
    axios.get(`${API_URL}/reviews/`, config)
      .then(results => {
        console.log('')
      })
  },
  // return a list of reviews for specific product id
  getOne: (req, res) => {
    let config = {
      headers: {
        'authorization': TOKEN
      }
    }
    axios.get(`${API_URL}/reviews/`, config)
      .then(results => {
        console.log('')
      })
  }
}
