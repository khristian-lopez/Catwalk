import React, { useState, useEffect } from 'react';
import { Slide } from 'pure-react-carousel';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import ActionButton from './ActionButton.jsx';
import ProductInfo from './ProductInfo.jsx';
import PropTypes from 'prop-types';

const RelatedProductCard = (props) => {

  return (
    <Slide index={props.index}>
      <div className="cards rel-prod-card" data-testid="rel-prod-card" onClick={(() => props.handleChangeProduct(props.product.id))}>
        <img className="preview" src={props.product.defaultStyle.photos[0].thumbnail_url} />
        <span>
          <ActionButton card={props.card}/>
        </span>
        <ProductInfo product={props.product}/>
      </div>
    </Slide>
  )
}

RelatedProductCard.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  handleChangeProduct: PropTypes.func,
  card: PropTypes.string
};

export default RelatedProductCard;