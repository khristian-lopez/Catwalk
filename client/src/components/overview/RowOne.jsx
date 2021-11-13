/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StyleInfo from './StyleInfo.jsx'
import MyGallery from './MyGallery.jsx'


const RowOne = ({ productInfo, styleInfo, handleChangeStyle }) => (

  <Container>
    <Row className="ov-main-row1" data-testid="ov-main-row1">
      <MyGallery styleInfo={styleInfo}/>
      <StyleInfo productInfo={productInfo} styleInfo={styleInfo} handleChangeStyle={handleChangeStyle}/>
    </Row>
  </Container>
)

export default RowOne;