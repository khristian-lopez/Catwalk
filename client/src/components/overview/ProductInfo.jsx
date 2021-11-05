/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const ProductInfo = (props) => (
  <Col className='col2' xs={7}>
    <Container className="ov-product-info">
      <Form >
          <Form.Group >
              <Form.Label><h5>Product Overview</h5></Form.Label>
              <Form.Control className="ov-textarea" as="textarea" rows={6} plaintext readOnly defaultValue={props.currentProduct.product_id}/>
          </Form.Group>
      </Form>
    </Container>
  </Col>
);

export default ProductInfo;