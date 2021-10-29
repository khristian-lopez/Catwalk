import React, { useState, useEffect } from 'react';
import ActionButton from './ActionButton.jsx';
import ProductInfo from './ProductInfo.jsx';

const RelatedProductCard = () => (
  <div className="card rel-prod-card">
    <span>
      <ActionButton />
    </span>
    <ProductInfo />
  </div>
)

export default RelatedProductCard;