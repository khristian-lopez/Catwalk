import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedProducts = () => (
  <div id="related">
    <h3> Related Products </h3>
    <RelatedProductsList />
    <h3> Your Outfit </h3>
    <YourOutfitList />
  </div>
)

export default RelatedProducts;