/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
const StyleInfo = ({ productInfo, styleInfo, handleChangeStyle }) => {

  const [size, changeSize] = useState(() => { return 'Select a Size'});
  const [quantity, changeQuantity] = useState(() => { return 'Quantity'});
  const [styleThumbnails, changeThumbnails] = useState([]);
  // const [currentStyle, changeStyle] = useState()
  // console.log('current style', styleInfo.style_id)

  useEffect(() => {
    axios.get(`/products/${productInfo.id}/styles`)
      .then(results => {
        changeThumbnails(results.data)
      })
      .catch(err => console.error(err))
  }, [productInfo])

  let selectedStyle = { border: 'none' }
  let originalPrice = { fontWeight: 'bold' }
  let salePrice = { fontWeight: 'bold' }
  let saleStatus = styleInfo.sale_price;

  console.log('sale price', styleInfo.sale_price)
  if (saleStatus) {
    let originalPrice = {
      textDecoration: 'line-through'
    }
  }

  const skus = styleInfo.skus
  console.log('sku info', styleInfo.skus)

  return (
    <Col className="ov-styles">
      <Stack >
        {/* specific product info */}
        <div>
          <StarRatings />  <br /> Read all XX reviews
        </div>
        <div>
          <label>{productInfo.category}</label>
          <h3>{productInfo.name}</h3>
          <label style={originalPrice}>{styleInfo.original_price}</label> <label style={salePrice}>{styleInfo.sale_price}</label>
        </div>
      </Stack>
      <Stack>
        {/* container for styles thumbnails */}
        <div className="ov-styles-thumbnails">
          Style &gt; Selected Style <br />
          <div >
            {styleThumbnails.map((style, index) => {
              // console.log(style.photos[0])
              if (style.style_id === styleInfo.style_id) {
                selectedStyle = {
                  border: '3px solid cyan'
                }
              } else {
                selectedStyle = { border: 'none'}
              }
              return <Image src={style.photos[0].thumbnail_url} thumbnail roundedCircle fluid width={75} height={75} key={style.style_id} id={style.style_id} onClick={() => handleChangeStyle(event) } style={selectedStyle} />
            })}
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
              {/* {.map(sku => {
                return <Dropdown.Item onClick={() => changeSize('test')} key={sku}>{styleInfo.skus.sku.size}</Dropdown.Item>
              })} */}
              {/* <Dropdown.Item onClick={() => changeSize('XS')}>XS</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('S')}>S</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('M')}>M</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('L')}>L</Dropdown.Item>
              <Dropdown.Item onClick={() => changeSize('XL')}>XL</Dropdown.Item> */}
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
