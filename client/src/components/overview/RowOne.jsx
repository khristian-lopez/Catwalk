/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StyleInfo from './StyleInfo.jsx'
import ImageGallery from './ImageGallery.jsx'


const RowOne = (props) => (

  <Container>
    <Row className="ov-main-row1">
      <ImageGallery productInfo={props.productInfo}/>
      <StyleInfo productInfo={props.productInfo}/>
    </Row>
  </Container>
)

export default RowOne;