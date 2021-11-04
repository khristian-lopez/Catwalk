import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductInfo from './ProductInfo.jsx';
import SocialLinks from './SocialLinks.jsx';


const RowTwo = () => (

  <Container>
    <Row className="ov-main-row2">
      <ProductInfo />
      <SocialLinks />
    </Row>
  </Container>
)

export default RowTwo;