import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import AddOutfitCard from './AddOutfitCard.jsx';
import RelatedProductCard from './RelatedProductCard.jsx';
import ActionButton from './ActionButton.jsx';
import ProductInfo from './ProductInfo.jsx';

const YourOutfitList = ({ currentProduct }) => {
  const [outfit, setOutfit] = useState([]);

  useEffect(() => {
    let outfitList = JSON.parse(localStorage.getItem('outfit'));
    if (outfitList) {
      setOutfit(outfitList);
    }
  }, [currentProduct])

  useEffect(() => {
    axios.get(`/products/${currentProduct.product_id}`)
      .then((result) => {
        Object.assign(currentProduct, result.data)
      })
  }, [currentProduct])

  const handleAdd = () => {
    if (localStorage.getItem('outfit') === null) {
      localStorage.setItem('outfit', JSON.stringify([]));
    }

    let outfitList = JSON.parse(localStorage.getItem('outfit'));

    let checkDupes = outfit.find(product => product.product_id === currentProduct.product_id)

    if (!checkDupes) {
      outfitList.push(currentProduct);
      localStorage.setItem('outfit', JSON.stringify(outfitList));
      if (outfitList) {
        setOutfit(outfitList);
      }
    }
  }

  const handleRemove = (productId) => {
    let outfitList = JSON.parse(localStorage.getItem('outfit'));

    for (var i = 0; i < outfitList.length; i++) {
      let product = outfitList[i];
      if (product.id === productId) {
        outfitList.splice(i, 1);
        break;
      }
    }

    localStorage.setItem('outfit', JSON.stringify(outfitList));
    if (outfitList) {
      setOutfit(outfitList);
    }
  }

  return (
    <CarouselProvider
    className="outfit-list"
    naturalSlideWidth={200}
    naturalSlideHeight={300}
    totalSlides={outfit.length + 1}
    visibleSlides={4}
    >
      <div data-testid='outfit'>
        <Slider>
          {outfit.map((product, i) => (
            <Slide key={product.id} index={i}>
              <div className="cards rel-prod-card">
                <img className="preview" src={product.defaultStyle.photos[0].thumbnail_url} />
                <span>
                  <ActionButton card={ 'outfit' } productId={product.id} handleRemove={handleRemove}/>
                </span>
                <ProductInfo product={product} />
              </div>
            </Slide>
          ))}
          <Slide index={outfit.length} onClick={handleAdd}>
            <AddOutfitCard />
          </Slide>
        </Slider>
        <ButtonBack>{'<'}</ButtonBack>
        <ButtonNext>{'>'}</ButtonNext>
      </div>
    </CarouselProvider>
  )
}

YourOutfitList.propTypes = {
  currentProduct: PropTypes.object
};

YourOutfitList.propTypes = {
  currentProduct: PropTypes.object,
  handleChangeProduct: PropTypes.func
};

export default YourOutfitList;