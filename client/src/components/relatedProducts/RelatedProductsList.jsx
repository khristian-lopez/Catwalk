import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedProductsList = () => (
  <div className="rel-products-list">
    <RelatedProductCard />
    <RelatedProductCard />
    <RelatedProductCard />
  </div>
)

export default RelatedProductsList;