/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
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
import useDeepCompareEffect from 'use-deep-compare-effect';
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.jsx';

const StyleInfo = ({ productInfo, styleInfo, handleChangeStyle }) => {

  const isFirstRef = useRef(true);
  const [size, changeSize] = useState(() => { return 'Select a Size'});
  const [sizeAndQuantOptions, changeSizeAndQuantOptions] = useState([]);
  const [storedQuantity, changeStoredQuantity] = useState();
  const [availableQuantity, changeAvailableQuantity] = useState([]);
  const [displayQuantity, changeDisplayQuantity] = useState(() => { return 'Quantity'});
  const [styleThumbnails, changeThumbnails] = useState([]);
  const [numberOfReviews, changeNumberOfReviews] = useState([])
  const [availabeSkus, changeAvailableSkus] = useState([])
  const [currentSku, changeCurrentSku] = useState([])

  useEffect(() => {
    if (productInfo.id) {
      axios.get(`/products/${productInfo.id}/styles`)
        .then(results => {
          changeThumbnails(results.data)
        })
        .then(axios.get(`/reviews/${productInfo.id}`)
          .then(results => {
            changeNumberOfReviews(results.data.results.length)
          }))
        .catch(err => console.error('unable to obtain style info at styleInfo,jsx', err))

    }
  }, [productInfo])


  useDeepCompareEffect(() => {
    if(isFirstRef.current) {
      isFirstRef.current = false;
      return;
    }
    const availableSkuValues = Object.values(styleInfo.skus)
    const availabeSkuKeys = Object.keys(styleInfo.skus)
    changeAvailableSkus(availabeSkuKeys)
    changeSizeAndQuantOptions(availableSkuValues)

    return () => {
      changeSize('Select a Size')
      changeCurrentSku([])
    }
  }, [styleInfo])

  useEffect(() => {
    const values = Array.from({length: storedQuantity}, (_, i) => i + 1);
    changeAvailableQuantity(values);

    return () => {
      changeAvailableQuantity([])
      changeDisplayQuantity('Quantity')
    }
  }, [storedQuantity, size])


  let selectedStyle = { border: 'none' }
  let originalPrice = { fontWeight: 'bold' }
  let originalSalePrice = { textDecoration: 'line-through', color: 'gray' }
  let salePrice = { fontWeight: 'bold', color: 'red', fontSize: '20px' }
  let saleStatus = styleInfo.sale_price;

  let priceLabel = saleStatus ?
    <div><label style={originalSalePrice}>{styleInfo.original_price}</label> <label style={salePrice}>{styleInfo.sale_price}</label> </div>
    : <label style={originalPrice}>{styleInfo.original_price}</label>

  const addToCart = (skuId, quantity) => {
    const product = {
      sku_id: skuId,
      count: quantity
    }

    axios.post(`/cart/`, product)
      .then(() => {
        alert('Successfully added item to cart')
      })
      .catch(err => {
        alert('Whoops, unable to add item to cart, please try again')
      })
  }


  return (
    <Col className="ov-styles" data-testid="style-info">
      <Stack >
        {/* specific product info */}
        <div>
          <StarRatings rating={productInfo.averageRating}/>  <br /> Read all {numberOfReviews} reviews
        </div>
        <div>
          <label>{productInfo.category}</label>
          <h3>{productInfo.name}</h3>
          {priceLabel}
        </div>
      </Stack>
      <Stack>
        {/* container for styles thumbnails */}
        <div className="ov-styles-thumbnails">
          Style &gt; Selected Style <br />
          <div >
            {styleThumbnails.map((style, index) => {
              if (style.style_id === styleInfo.style_id) {
                selectedStyle = {
                  border: '3px solid lightskyblue'
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
              {sizeAndQuantOptions.map((sku, index) => {
                return <Dropdown.Item onClick={() => {
                  changeSize(`${sku.size}`)
                  changeStoredQuantity(`${sku.quantity}`)
                  changeCurrentSku(`${availabeSkus.slice(index, index + 1)}`)
                }} key={index}>{sku.size}</Dropdown.Item>
              })}
            </SplitButton>
            {/* select a quatity dropdown */}
            <SplitButton size="sm" variant="secondary" title={displayQuantity}>
              <Dropdown.Header>Quantity</Dropdown.Header>
              {availableQuantity.slice(0, 15).map((number, index) => {
                return <Dropdown.Item onClick={() => changeDisplayQuantity(`${number}`)} key={index}>{number}</Dropdown.Item>
              })}
            </SplitButton>
          </div>
          {/* checkout button */}
          <Button variant="primary" size="sm" onClick={() => {
            addToCart(currentSku, displayQuantity)}}>Add To Cart</Button>{' '}
        </Stack>
    </Col>
  );
};

export default StyleInfo;
