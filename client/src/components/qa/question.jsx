/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AnswerList from './answerlist.jsx'

const Question = (props) => (
/*   <div className='qa-Questions'>
  <div className='qa-Question'>
    <div>Q:</div>
    <div>{props.question.question_body}</div>
    <div>Helpful?</div>
    <div>Yes</div>
    <div>({props.question.question_helpfulness}) |</div>
    <div>Add Answer</div>
   </div>
   <AnswerList question_id={props.question.question_id}/>
   </div> */

  <Container fluid='md'>
    <Row>
    <Col className='qa-Question'>Q: {props.question.question_body}</Col>
    <Col className='qa-QuestionHelpful'>Helpful? Yes ({props.question.question_helpfulness}) | Add Answer</Col>
    </Row>
    <Row>
      <AnswerList question_id={props.question.question_id}/>
    </Row>
  </Container>
)


export default Question