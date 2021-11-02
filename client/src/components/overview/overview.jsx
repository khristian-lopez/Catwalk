import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RowOne from './RowOne.jsx';
import Col from 'react-bootstrap/Col'

const Overview = () => (
  <Container fluid="sm" className="ov-main">
    <div >
      <h1>Overview</h1>
    </div>
    <RowOne />
    <Row className="ov-main-row2">
      <p>product overview and social links row</p>
    </Row>
  </Container>
)

export default Overview;