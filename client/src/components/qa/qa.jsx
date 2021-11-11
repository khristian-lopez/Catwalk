/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import Search from './questionsearch.jsx'
import QuestionList from './questionlist.jsx'


const Qa = (props) => (
  <Container fluid="md" className = 'qa-Main' onClick={(e) => props.postUserClick(e, 'Q&A')}>
  <Row>
    <Col className='qa-MainTitle'>QUESTIONS AND ANSWERS</Col>
  </Row>
  <Row>
    <Search />
  </Row>
  <Row>
    <QuestionList currentProductId={props.currentProduct.product_id}/>
  </Row>
</Container>
)

export default Qa;