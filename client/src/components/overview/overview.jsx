import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import Col from 'react-bootstrap/Col'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Overview = () => (
  <Container md className="ov-main">
    <Row>
      <h1>Overview</h1>
    </Row>
    <Row>
      <RowOne />
    </Row>
    <Row>
      <RowTwo />
    </Row>
  </Container>
)

export default Overview;