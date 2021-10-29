import React, { useState, useEffect } from 'react';
import StarRatings from '../StarRatings.jsx';

const ProductInfo = () => (
  <div className='prod-info'>
    <span style={{ fontSize: '12px'}}> Category </span> <br/>
    <span style={{ fontWeight: 'bold'}}> Product Name </span> <br/>
    <span style={{ fontSize: '12px'}}> $123 </span>
    <br/>
    <StarRatings />
  </div>
)

export default ProductInfo;