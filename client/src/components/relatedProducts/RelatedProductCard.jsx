import React, { useState, useEffect } from 'react';
import ActionButton from './ActionButton.jsx';
import ProductInfo from './ProductInfo.jsx';

const RelatedProductCard = () => (
  <div className="card rel-prod-card">
    <img src="assets/product-image-placeholder-300x300.jpeg" style={{ width:'100%' }} />
    <span>
      <ActionButton />
    </span>
    <ProductInfo />
  </div>
)

export default RelatedProductCard;