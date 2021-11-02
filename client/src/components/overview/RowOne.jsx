import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StyleInfo from './StyleInfo.jsx'
import ImageGallery from './ImageGallery.jsx'


const RowOne = () => (

  <Row className="ov-main-row1">
    <ImageGallery />
    <StyleInfo />
  </Row>
)

export default RowOne;