/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import AnswerList from './answerlist.jsx'
import axios from 'axios'

const Question = (props) => {

  const markQuestionAsHelpful = () => {
    axios.put(`/qa/questions/${props.question.question_id}/helpful`)
    .then(() => console.log('Success'))
    .catch(err => console.error(err));
  }

  const reportQuestion = () => {
    axios.put(`/qa/questions/${props.question.question_id}/report`)
    .then(() => console.log('Success'))
    .catch(err => console.error(err));
  }

  const addAnswer = () => {
    axios.post(`/qa/questions/${props.question.question_id}/answers`)
    .then(() => console.log('Success'))
    .catch(err => console.error(err));
  }

  return (
  <Container fluid='md'>
    <Row>
    <Col className='qa-Question'>Q: {props.question.question_body}</Col>
    <Col className='qa-QuestionHelpful'>Helpful? Yes ({props.question.question_helpfulness}) | No | Add Answer</Col>
    <Button onClick={markQuestionAsHelpful}>Yes</Button>
    <Button onClick={reportQuestion}>Report</Button>
    <Button onClick={addAnswer}>Add Answer</Button>
    </Row>
    <Row>
      <AnswerList question_id={props.question.question_id}/>
    </Row>
  </Container>)
}


export default Question