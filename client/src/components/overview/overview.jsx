/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import Col from 'react-bootstrap/Col'

const Overview = (props) => (
  <Container fluid="md" className="ov-main">
    <Row>
      <h1>Overview</h1>
    </Row>
    <Row>
      <RowOne currentProduct={props}/>
    </Row>
    <Row>
      <RowTwo currentProduct={props.currentProduct}/>
    </Row>
  </Container>
)

export default Overview;