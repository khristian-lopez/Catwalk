import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import Col from 'react-bootstrap/Col'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Overview = () => (
  <Container fluid="md" className="ov-main">
    <div >
      <h1>Overview</h1>
    </div>
    <RowOne />
    <RowTwo />
  </Container>
)

export default Overview;