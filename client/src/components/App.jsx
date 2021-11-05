import React from 'react';
import axios from 'axios';
import Overview from './overview/overview.jsx';
import Qa from './qa/qa.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewMetadata: { product_id: 42368 }
    };

    this.handleChangeProduct = this.handleChangeProduct.bind(this);
    this.getReviewMetadata = this.getReviewMetadata.bind(this);
  }

  componentDidMount() {
    this.getReviewMetadata(this.state.reviewMetadata.product_id || 42366 );
  }

  getReviewMetadata(productId) {
    axios.get(`reviews/meta/${productId}`)
      .then(results => this.setState({ reviewMetadata: results.data }))
      .catch(err => console.error('failed to retrieve review metadata: ', err))
  }

  handleChangeProduct(productId) {
    this.getReviewMetadata(productId);
  }

  render () {
    return (
      <div>
        <h1>Project Catwalk</h1>
        <div>
          <Overview currentProduct={this.state.reviewMetadata}/>
        </div>
        <RelatedProducts currentProduct={this.state.reviewMetadata} handleChangeProduct={this.handleChangeProduct}/>
        <Qa currentProduct={this.state.reviewMetadata}/>
        <RatingsAndReviews currentProduct={this.state.reviewMetadata}/>
      </div>
    )
  }

}
export default App;