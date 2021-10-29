import React, { useState, useEffect } from 'react';
import StarRatings from '../StarRatings.jsx';

const ProductInfo = () => (
  <div className='prod-info'>
    <h5> Category </h5>
    <h3> Product Name </h3>
    <span> $123 </span>
    <br/>
    <StarRatings />
  </div>
)

export default ProductInfo;