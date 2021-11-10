/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import defaultData from './defaultData.js';

const Overview = ({ currentProduct, currentStyle, handleChangeStyle }) => {
  // create a useState that obtains current product info
  const [productInfo, changeProductInfo]  = useState([])
  // create a useState that obtains current style info
  const [styleInfo, changeStyleInfo] = useState([])

  //create a useEffect to retreive the product info for currentProduct
  useEffect(() => {
    axios.get(`/products/${currentProduct}`)
    .then(results => changeProductInfo(results.data))
    .catch(err => console.error('Not able to obtain product info at overview product', err))
  }, [currentProduct])

  // create a useEffect to retreive the style info the is selected
  useEffect(() => {
    axios.get(`/products/${currentProduct}/styles`)
    .then(results => {
      for (var style of results.data) {
        if (style.style_id === currentStyle) {
          changeStyleInfo(style)
        }
      }
    })
    .catch(err => console.error('Not able to obtain style info at overview style', err))
  }, [currentProduct, currentStyle])
    //needs to be able to change style when product is changed (to default style) and change when a different product is chosen.

    return (
      <Container fluid="md" className="ov-main" data-testid="ov-main">
        <Row>
          <h1>Product Overview</h1>
        </Row>
        <Row>
          <RowOne productInfo={productInfo} styleInfo={styleInfo} handleChangeStyle={handleChangeStyle}/>
        </Row>
        <Row>
          <RowTwo productInfo={productInfo}/>
        </Row>
      </Container>

    )
}


export default Overview;