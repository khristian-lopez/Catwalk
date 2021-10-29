import React, { useState, useEffect } from 'react';
import AddOutfitCard from './AddOutfitCard.jsx';
import RelatedProductCard from './RelatedProductCard.jsx';

const YourOutfitList = () => (
  <div className="outfit-list">
    <RelatedProductCard />
    <AddOutfitCard />
  </div>
)

export default YourOutfitList;