const TOKEN = require('../../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`;

module.exports = (productId) => {

  let config = {
    headers: {
      'Authorization': TOKEN
    }
  }

  return axios.get(`${API_URL}/reviews/meta?product_id=${productId}`, config)
      .then(results => {
        let ratings = results.data.ratings;
        let ratingsCount = 0;
        let ratingsSum = 0;
        for (var rating in ratings) {
          ratingsCount += Number(ratings[rating]);
          ratingsSum += Number(rating) * Number(ratings[rating]);
        }
        let avgRating = Math.round((ratingsSum / ratingsCount) * 10) / 10;
        return avgRating;
      })
      .catch(err => {
        console.log('failed to retrieve metadata in helper')
      });
}
