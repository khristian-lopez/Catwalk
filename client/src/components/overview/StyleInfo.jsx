import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StarRatings from '../StarRatings.jsx';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

const StyleInfo = () => (
  <Col className='col1'>
    purchase style options
    <div>
      <StarRatings /> Read all XX reviews
    </div>
    <div>
      <label>Category</label>
      <h3>Product Name</h3>
      <label>Price</label>
    </div>
    <Container className="ov-main">
      style slector/thumbnails
      <Image src="assets/product-image-placeholder-300x300.jpeg" thumbnail roundedCircle fluid/>
    </Container>
    <Container className="ov-main">
    <Button variant="primary" size="sm">add to cart</Button>{' '}

    </Container>


  </Col>
);

export default StyleInfo;