import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedProductsList = () => (
  <CarouselProvider
    className="rel-products-list"
    naturalSlideWidth={200}
    naturalSlideHeight={300}
    totalSlides={6}
    visibleSlides={4}
  >
  {/* TODO: make totalSlides dynamic */}
    <Slider>
      <Slide index={0}><RelatedProductCard card={'related'}/></Slide>
      <Slide index={1}><RelatedProductCard card={'related'}/></Slide>
      <Slide index={2}><RelatedProductCard card={'related'}/></Slide>
      <Slide index={3}><RelatedProductCard card={'related'}/></Slide>
      <Slide index={4}><RelatedProductCard card={'related'}/></Slide>
      <Slide index={5}><RelatedProductCard card={'related'}/></Slide>
    </Slider>
    <ButtonBack>{'<'}</ButtonBack>
    <ButtonNext>{'>'}</ButtonNext>
  </CarouselProvider>
)

export default RelatedProductsList;