import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarRatings from '../StarRatings.jsx';

const ProductInfo = ({ product }) => (
  <div className='prod-info'>
    <span className='prod-category' > {product.category} </span> <br/>
    <span className='product-name' title="Expanded Product Name with Extra Text That Cannot Fit"> {product.name} </span> <br/>
    <span className='prod-price' >
      {product.defaultStyle.sale_price
        ? <span><s>{'$' + product.defaultStyle.original_price}</s> <span style={{"color": "red"}}>{'$' + product.defaultStyle.sale_price} </span></span>
        : '$' + product.defaultStyle.original_price
      }
    </span>
    <br/>
    <span className='prod-rating'> <StarRatings rating={product.avgRating}/> </span>
  </div>
)

ProductInfo.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductInfo;