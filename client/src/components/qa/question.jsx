/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false)

  return (
  <Container fluid='md'>
    <Row>
    <Col className='qa-Question' xs={12} md={8}>Q: {props.question.question_body}</Col>

    <Col className='qa-QuestionHelpful' xs={6} md={4}>

    <Button onClick={markQuestionAsHelpful} variant='link'>Yes ({props.question.question_helpfulness})</Button>
    <Button onClick={reportQuestion} variant='link'>Report</Button>
    <Button onClick={() => handleShow()} variant='link'>Add Answer</Button>

    </Col>

    </Row>
    <Row>
      <AnswerList question_id={props.question.question_id}/>
    </Row>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header>Ask a question</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Answer</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Photos</Form.Label>
              <Form.Control type='file' multiple/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose}>
            Submit answer
          </Button>
        </Modal.Footer>
      </Modal>




  </Container>)
}


export default Question