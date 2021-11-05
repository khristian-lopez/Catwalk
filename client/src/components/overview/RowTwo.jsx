/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductInfo from './ProductInfo.jsx';
import SocialLinks from './SocialLinks.jsx';


const RowTwo = (props) => (

  <Container>
    <Row className="ov-main-row2">
      <ProductInfo currentProduct={props.currentProduct}/>
      <SocialLinks />
    </Row>
  </Container>
)

export default RowTwo;