import React from 'react';
import Overview from './overview/overview.jsx';
import Qa from './qa/qa.jsx';
import Ratings from './ratings/ratings.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';



const App = () => (
  <div>
    <h1>we them techGuys!</h1>
    <Overview />
    <RelatedProducts />
    <Qa />
    <Ratings />
  </div>

)
export default App;