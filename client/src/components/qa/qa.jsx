import React from 'react';
import QuestionList from './questionlist.jsx'
import Search from './questionsearch.jsx'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Qa = () => (
/*   <div className='qa-Main'>
    <div>Questions and Answers</div>
    <Search />
    <QuestionList/>
  </div> */
  <Container fluid="md" className = 'qa-Main'>
  <Row>
    <Col>Questions and Answers</Col>
  </Row>
  <Row>
    <Search />
  </Row>
  <Row>
    <QuestionList />
  </Row>
</Container>
)

export default Qa;