import React from 'react';
import axios from 'axios';
import Overview from './overview/overview.jsx';
import Qa from './qa/qa.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './relatedProducts/relatedProducts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 42366,
      reviewMetadata: []
    };

    this.handleChangeProduct = this.handleChangeProduct.bind(this);
  }

  componentDidMount() {
    axios.get(`reviews/meta/${this.state.currentProductId}`)
      .then(results => this.setState({ reviewMetadata: results.data }))
      .catch(err => console.error('failed to retrieve review metadata: ', err))
  }

  handleChangeProduct(productId) {
    this.setState({
      currentProductId: productId
    });
  }

  render () {
    return (
      <div>
        <h1>Project Catwalk</h1>
        <div>
          <Overview currentProduct={this.state.currentProductId}/>
        </div>
        <RelatedProducts currentProduct={this.state.currentProductId}/>
        <Qa currentProduct={this.state.currentProductId}/>
        <RatingsAndReviews currentProduct={this.state.currentProductId}/>
      </div>
    )
  }

}
export default App;