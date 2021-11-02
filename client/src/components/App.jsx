import React from 'react';
import Overview from './overview/overview.jsx';
import Qa from './qa/qa.jsx';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedProducts from './relatedProducts/relatedProducts.jsx';

const App = () => (
  <div>
    <h1>Project Catwalk</h1>
    <div>
      <Overview />
    </div>
    <RelatedProducts />
    <Qa />
    <RatingsAndReviews />
  </div>

)
export default App;