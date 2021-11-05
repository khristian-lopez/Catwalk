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
      currentProductId: 42366
    };

    this.handleChangeProduct = this.handleChangeProduct.bind(this);
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
          <Overview currentProduct={this.state.currentProduct}/>
        </div>
        <RelatedProducts currentProduct={this.state.currentProduct}/>
        <Qa currentProduct={this.state.currentProduct}/>
        <RatingsAndReviews currentProduct={this.state.currentProduct}/>
      </div>
    )
  }

}
export default App;