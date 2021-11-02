import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductInfo from './ProductInfo.jsx';
import SocialLinks from './SocialLinks.jsx';


const RowTwo = () => (

  <Row className="ov-main-row2">
    <ProductInfo />
    <SocialLinks />
  </Row>
)

export default RowTwo;