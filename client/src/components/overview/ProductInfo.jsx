import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const ProductInfo = () => (
  <Col className='col2' xs={7}>
    <Container className="ov-product-info">
      <Form >
          <Form.Group >
              <Form.Label><h5>Product Overview</h5></Form.Label>
              <Form.Control className="ov-textarea" as="textarea" rows={6} plaintext readOnly defaultValue="This is an example description of the product selected"/>
          </Form.Group>
      </Form>
    </Container>
  </Col>
);

export default ProductInfo;