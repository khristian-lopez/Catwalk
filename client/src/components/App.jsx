import React from 'react';
import Overview from './overview/overview.jsx';
import Qa from './qa/qa.jsx';
import RatingsAndReviews from './ratings/RatingsAndReviews.jsx';
import RelatedProducts from './relatedProducts/relatedProducts.jsx';

const App = () => (
  <div>
    <h1>we them techGuys!</h1>
    <Overview />
    <RelatedProducts />
    <Qa />
    <RatingsAndReviews />
  </div>

)
export default App;