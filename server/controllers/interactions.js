const TOKEN = require('../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`

module.exports = {
  post: (req, res) => {

    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }

    let data = req.body;
    axios.post(`${API_URL}/interactions`, data, config)
      .then(results => res.status(results.status).send(results.data))
      .catch(err => {
        console.log('failed to post interaction: ', err);
        res.status(err.response.status).send(err.response.data);
      })
  }
}
