import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const ProductInfo = () => (
  <Col className='col2' xs={7}>
    <Form>
        <Form.Group >
            <Form.Label>Product Overview</Form.Label>
            <Form.Control className="ov-textarea" as="textarea" rows={6} plaintext readOnly defaultValue="This is an example description of the product selected"/>
        </Form.Group>
    </Form>
  </Col>
);

export default ProductInfo;