import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedProductsList from './RelatedProductsList.jsx';
import YourOutfitList from './YourOutfitList.jsx';

const RelatedProducts = ({ currentProduct }) => {
  return (
    <div id='related' data-testid='related-products'>
      <h3> Related Products </h3>
      <RelatedProductsList currentProduct={currentProduct}/>
      <h3> Your Outfit </h3>
      <YourOutfitList currentProduct={currentProduct}/>
    </div>
  )
}

RelatedProducts.propTypes = {
  currentProduct: PropTypes.object
};

export default RelatedProducts;