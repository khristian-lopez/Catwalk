import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarRatings from '../StarRatings.jsx';

const ProductInfo = ({ product }) => (
  <div className='prod-info'>
    <span className='prod-category' > {product.category} </span> <br/>
    <span className='product-name' title="Expanded Product Name with Extra Text That Cannot Fit"> {product.name} </span> <br/>
    <span className='prod-price' > {'$' + product.default_price} </span>
    <br/>
    <span className='prod-rating'> <StarRatings /> </span>
  </div>
)

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductInfo;