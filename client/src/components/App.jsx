import React from 'react';
import Overview from './overview/overview.jsx';
import Qa from './qa/qa.jsx';
import Ratings from './ratings/ratings.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';



const App = () => (
  <div>
    <h1>Project Catwalk</h1>
    <div className="bootstrap-iso">
      <Overview />
    </div>
    <RelatedProducts />
    <Qa />
    <Ratings />
  </div>

)
export default App;