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
  },

  markHelpful: (req, res) => {
    let config = {
      headers: {
        'Authorization': TOKEN
      }
    }

  var answer_id = req.params.answer_id
  console.log(answer_id)

  axios.put(`${API_URL}/qa/answers/${answer_id}/helpful`, {}, config)
  .then(() => {
    console.log('Successfully marked answer as helpful.')
    res.status(204).send()
  })
  .catch(err => {
    console.error('Unsuccessfully marked answer as helpful.')
    res.status(400).send(err)
  })
}
}

