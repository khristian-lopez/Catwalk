import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedProducts = (props) => {

  return (
    <div id='related' data-testid='related-products'>
      <h3> Related Products </h3>
      <RelatedProductsList />
      <h3> Your Outfit </h3>
      <YourOutfitList />
    </div>
  )
}

export default RelatedProducts;