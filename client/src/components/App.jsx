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
      reviewMetadata: { product_id: 42366 },
      currentStyle: 253620
    };

    this.handleChangeProduct = this.handleChangeProduct.bind(this);
    this.getReviewMetadata = this.getReviewMetadata.bind(this);
    this.handleChangeStyle = this.handleChangeStyle.bind(this);
    this.postUserClick = this.postUserClick.bind(this);
  }

  componentDidMount() {
    this.getReviewMetadata(this.state.reviewMetadata.product_id || 42366);
  }

  getReviewMetadata(productId) {
    axios.get(`reviews/meta/${productId}`)
      .then(results => this.setState({ reviewMetadata: results.data, currentStyle: results.data.defaultStyle.style_id }))
      .catch(err => console.error('failed to retrieve review metadata: ', err))
  }
  handleChangeStyle(event) {
    this.setState({
      currentStyle: Number(event.target.id)
    })
  }

  handleChangeProduct(productId) {
    this.getReviewMetadata(productId);
  }

  postUserClick(e, widget) {
    const time = new Date().toTimeString();

    const data = {
      element: e.target.localName,
      widget,
      time
    }

    axios.post(`/interactions`, data)
      .then(results => console.log(`Interaction was posted and ${results.data}`))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Container className="header"><h1>Catwalk</h1></Container>
        <Overview postUserClick={this.postUserClick} currentProduct={this.state.reviewMetadata.product_id} currentStyle={this.state.currentStyle} handleChangeStyle={this.handleChangeStyle}/>
        <RelatedProducts postUserClick={this.postUserClick} currentProduct={this.state.reviewMetadata} handleChangeProduct={this.handleChangeProduct}/>
        <Qa postUserClick={this.postUserClick} currentProduct={this.state.reviewMetadata}/>
        <RatingsAndReviews postUserClick={this.postUserClick} currentProduct={this.state.reviewMetadata} />

      </div>
    )
  }

}
export default App;