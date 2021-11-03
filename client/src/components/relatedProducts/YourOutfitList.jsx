import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import AddOutfitCard from './AddOutfitCard.jsx';
import RelatedProductCard from './RelatedProductCard.jsx';

const YourOutfitList = () => (
  <CarouselProvider
  className="outfit-list"
  naturalSlideWidth={200}
  naturalSlideHeight={300}
  totalSlides={2}
  visibleSlides={4}
  >
    <div data-testid='outfit'>
      <Slider>
        {/* <Slide index={0}>
          <RelatedProductCard card={'outfit'}/>
        </Slide> */}
        <Slide index={0}>
          <AddOutfitCard />
        </Slide>
      </Slider>
      <ButtonBack>{'<'}</ButtonBack>
      <ButtonNext>{'>'}</ButtonNext>
    </div>
  </CarouselProvider>
)

export default YourOutfitList;