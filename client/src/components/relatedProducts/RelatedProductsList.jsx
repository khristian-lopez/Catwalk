import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import RelatedProductCard from './RelatedProductCard.jsx';

const exampleProducts = [
  {
    "id": 1,
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Jackets",
    "default_price": "140"
  },
  {
    "id": 2,
    "name": "Bright Future Sunglasses",
    "slogan": "You've got to wear shades",
    "description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    "category": "Accessories",
    "default_price": "69"
  },
  {
    "id": 3,
    "name": "Morning Joggers",
    "slogan": "Make yourself a morning person",
    "description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
    "category": "Pants",
    "default_price": "40"
  },
]

const RelatedProductsList = ({ currentProduct, handleChangeProduct }) => {
  const [products, setProducts] = useState([]);
  const currentProductId = currentProduct.product_id;
  // TODO: add spinner to list
  useEffect(() => {
    axios.get(`/products/${currentProductId}/related`)
      .then(results => setProducts(results.data))
      .catch(err => console.error(err));
  }, [currentProduct]);

  return (
    <CarouselProvider
      className="rel-products-list"
      naturalSlideWidth={200}
      naturalSlideHeight={300}
      totalSlides={products.length}
      visibleSlides={4}
    >
      <div data-testid='related-prod-list'>
        <Slider>
          {products.map((product, i) => (
            <RelatedProductCard
              key={product.id}
              product={product}
              index={i}
              handleChangeProduct={handleChangeProduct}
            />
          ))}
        </Slider>
        <ButtonBack>{'<'}</ButtonBack>
        <ButtonNext>{'>'}</ButtonNext>
      </div>
    </CarouselProvider>
  )
}

RelatedProductsList.propTypes = {
  currentProduct: PropTypes.object,
  handleChangeProduct: PropTypes.func
};

export default RelatedProductsList;