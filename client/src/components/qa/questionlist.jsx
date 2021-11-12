/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import Question from './question.jsx'

const QuestionList = (props) => {
  const currentProductId = props.currentProductId;
  const [questions, setQuestions] = useState([]);
  const [maxQuestions, setMaxQuestions] = useState(4);
  const [question, setQuestion] = useState({
    body: '',
    name: '',
    email: '',
    product_id: currentProductId
  })
  const [show, setShow] = useState(false)




  useEffect(() => {
    //Gets questions from server, rerenders if the current product or max questions are changed
    axios.get(`/qa/questions/${currentProductId}`)
      .then(results => setQuestions(results.data.results.slice(0, maxQuestions)))
      .catch(err => console.error(err));
  }, [currentProductId, maxQuestions]);

  //Handles opening and closing of modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Posts a question to the server
  const addQuestion = () => {
    axios.post(`/qa/questions/${currentProductId}`, question)
    .then(() => console.log('Success'))
    .catch(err => console.error(err));
  }

  return (
  <div className='qa-QuestionList'>
    {questions.map((question) => (
      <Question question={question} key={question.question_id}/>
    ))}
    <Row>
      <Col>
      <Button onClick={() => setMaxQuestions(50)}>Show more questions</Button>
      </Col>
      <Col>
      <Button onClick={() => handleShow()}>Add a question</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Ask a question</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label >Question</Form.Label>
              <Form.Control onChange={(event) => setQuestion({...question, body: event.target.value})}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={(event) => setQuestion({...question, name: event.target.value})}/>
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(event) => setQuestion({...question, email: event.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={addQuestion}>Submit question</Button>
        </Modal.Footer>
      </Modal>
      </Col>
    </Row>
  </div>
  )
    }

export default QuestionList;