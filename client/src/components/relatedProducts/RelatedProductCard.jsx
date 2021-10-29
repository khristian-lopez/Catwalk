import React, { useState, useEffect } from 'react';
import ActionButton from './ActionButton.jsx';
import ProductInfo from './ProductInfo.jsx';

const RelatedProductCard = () => (
  <div className="card rel-prod-card">
    <ActionButton />
    <ProductInfo />
  </div>
)

export default RelatedProductCard;