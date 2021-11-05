import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StarRatings from '../StarRatings.jsx';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Stack from 'react-bootstrap/Stack';

const StyleInfo = () => {

  const [size, changeSize] = useState('Select a Size');
  const [quantity, changeQuantity] = useState('Quantity');
  return (
    <Col className="ov-styles">
      <Stack >
        {/* specific product info */}
        <div>
          <StarRatings />  <br /> Read all XX reviews
        </div>
        <div>
          <label>Category</label>
          <h3>Product Name</h3>
          <label>Price</label>
        </div>
      </Stack>
      <Stack>
        {/* container for styles thumbnails */}
        <div className="ov-styles-thumbnails">
          Style &gt; Selected Style <br />
          <div className="ov-style-thumbnails">
            <Image src="assets/product-image-placeholder-300x300.jpeg" thumbnail roundedCircle fluid width="75" height="75"/>
            <Image src="assets/product-image-placeholder-300x300.jpeg" thumbnail roundedCircle fluid width="75" height="75"/>
            <Image src="assets/product-image-placeholder-300x300.jpeg" thumbnail roundedCircle fluid width="75" height="75"/>
            <br />
            <Image src="assets/product-image-placeholder-300x300.jpeg" thumbnail roundedCircle fluid width="75" height="75"/>
            <Image src="assets/product-image-placeholder-300x300.jpeg" thumbnail roundedCircle fluid width="75" height="75"/>
            <Image src="assets/product-image-placeholder-300x300.jpeg" thumbnail roundedCircle fluid width="75" height="75"/>

          </div>
        </div>
        <br />
        </Stack>
        {/* add to cart/checkout component */}
        <Stack className="ov-add-to-cart">
          <div>
            {/* select a size dropdown */}
            <SplitButton size="sm" variant="secondary" title={size}>
              <Dropdown.Header>Please select a size</Dropdown.Header>
              <Dropdown.Item onClick={() => changeSize('XS')}>XS</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('S')}>S</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('M')}>M</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('L')}>L</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('XL')}>XL</Dropdown.Item>
            </SplitButton>
            {/* select a quatity dropdown */}
            <SplitButton size="sm" variant="secondary" title={quantity}>
              <Dropdown.Header>Quantity</Dropdown.Header>
              <Dropdown.Item onClick={() => changeQuantity('1')}>1</Dropdown.Item>
              <Dropdown.Item onClick={() => changeQuantity('2')}>2</Dropdown.Item>
              <Dropdown.Item onClick={() => changeQuantity('3')}>3</Dropdown.Item>
              <Dropdown.Item onClick={() => changeQuantity('4')}>4</Dropdown.Item>
              <Dropdown.Item onClick={() => changeQuantity('5')}>5</Dropdown.Item>
            </SplitButton>
          </div>
          {/* checkout button */}
          <Button variant="primary" size="sm">add to cart</Button>{' '}
          {/* favorite/star icon?? */}
        </Stack>
    </Col>
  );
};

export default StyleInfo;
