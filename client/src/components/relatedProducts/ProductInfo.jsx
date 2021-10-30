import React, { useState, useEffect } from 'react';
import StarRatings from '../StarRatings.jsx';

const ProductInfo = () => (
  <div className='prod-info'>
    <span style={{ fontSize: '12px'}}> Category </span> <br/>
    <span title="Expanded Product Name with Extra Text That Cannot Fit" className='product-name'> Expanded Product Name with Extra Text That Cannot Fit </span>
    <span style={{ fontSize: '12px'}}> $123 </span>
    <br/>
    <StarRatings />
  </div>
)

export default ProductInfo;