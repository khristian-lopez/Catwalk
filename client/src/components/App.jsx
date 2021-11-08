import React from 'react';
import axios from 'axios';
import Overview from './overview/Overview.jsx';
import Qa from './qa/qa.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewMetadata: { product_id: 42369 },
      currentStyle: 253637
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
  //create a get current style id, defaults to default value unless other style is selected

  handleChangeProduct(productId) {
    this.getReviewMetadata(productId);
  }

  render () {
    return (
      <div>
        <Container><h1>Project Catwalk</h1></Container>
        <Overview currentProduct={this.state.reviewMetadata.product_id} currentStyle={this.state.currentStyle}/>
        <RelatedProducts currentProduct={this.state.reviewMetadata} handleChangeProduct={this.handleChangeProduct}/>
        <Qa currentProduct={this.state.reviewMetadata}/>
        <RatingsAndReviews currentProduct={this.state.reviewMetadata}/>
      </div>
    )
  }

}
export default App;