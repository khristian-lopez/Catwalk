const TOKEN = require('../../config.js').TOKEN;
const axios = require('axios');
const API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax`

module.exports = {
  getAllQuestions: (req, res) => {
    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }

    var product_id = req.params.product_id

    axios.get(`${API_URL}/qa/questions?product_id=${product_id}`, config)
      .then(results => {
        console.log(`All questions for product ${product_id} have been retrieved.`)
          res.status(200).send(results.data)
      })
        .catch(err => {
          console.error(`Unable to retrieve all questions for product ${product_id}`)
          res.status(400).send(err)
      })
  },

  getAllAnswers: (req, res) => {
    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }

    var question_id = req.params.question_id

    axios.get(`${API_URL}/qa/questions/${question_id}/answers`, config)
    .then(results => {
      console.log(`All answers for question ${question_id} have been retrieved.`)
      res.status(200).send(results.data)
    })
    .catch(err => {
      console.error(`Unable to retrieve all answers for question ${question_id}`)
      res.status(400).send(err)
    })
  }
}

