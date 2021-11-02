import React, { useState, useEffect } from 'react';
import ActionButton from './ActionButton.jsx';
import ProductInfo from './ProductInfo.jsx';
import PropTypes from 'prop-types';

const RelatedProductCard = ({ card }) => (
  <div className="cards rel-prod-card">
    <img src="assets/product-image-placeholder-300x300.jpeg" style={{ width:'100%' }} />
    <span>
      <ActionButton card={ card }/>
    </span>
    <ProductInfo />
  </div>
)

RelatedProductCard.propTypes = {
  card: PropTypes.string.isRequired
};

export default RelatedProductCard;