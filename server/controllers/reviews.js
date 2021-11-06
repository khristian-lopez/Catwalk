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
      .then(result => {
        console.log(`Successfully retrieved all reviews for product id: ${productId}`)
        res.status(200).send(result.data)
      })
      .catch(err => {
        console.error('Cannot retrieve reviews')
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
  },

  // TODO: Add a review for given product
  addReview: (req, res) => {
    let productId = req.params.product_id;

    let body = {
      product_id: req.body.product_id,
      rating: req.body.rating, 
      summary: req.body.summary,
      body: req.body.body,
      recommend: req.body.recommend,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos,
      characteristics: req.body.characteristics
    }
    // * still need to test * 
    axios.post(`${API_URL}/reviews/?product_id=${productId}`, body, config)
      .then(() => {
        console.log('Successfully added review!')
        res.status(201).send()
      })
      .catch(err => {
        console.log('Unable to add review..')
        res.status(400).send(err)
      })
    // let options = {
    //   method: 'POST',
    //   url: `${API_URL}/reviews/?product_id=${productId}`,
    //   data: body,
    //   head: config
    // }
    // axios(options)
    //   .then(data => {
    //     console.log('Successfully posted review!!')
    //     res.status(201).send(data)
    //   })
    //   .catch(err => {
    //     console.log('Unable to post review..')
    //     res.status(500).send(err)
    //   })
  },
  
  // TODO: Updates a review to show it was found helpful
  markHelpful: (req, res) => {
    let review_id = req.params.review_id;
    axios.put(`${API_URL}/${review_id}/helpful`, null, config)
      .then(({data}) => {
        console.log('Successfully marked review as helpful!')
        res.status(204).send(data)
      })
      .catch(err => {
        console.error('Cannot mark review as helpful...')
        res.status(500).send(err)
      })
  }
  // TODO: Updates a review to show it was reported 
}