/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import axios from 'axios'

const Answer = (props) => {

  const markAnswerAsHelpful = () => {

    axios.put(`/qa/answers/${props.answer.answer_id}/helpful`)
    .then(() => console.log('Success'))
    .catch(err => console.error(err));
  }

  const reportAnswer = () => {
    axios.put(`/qa/answers/${props.answer.answer_id}/report`)
    .then(() => console.log('Success'))
    .catch(err => console.error(err));
  }

  return (
  <div>
    <div className='qa-Answer'>{props.answer.body}</div>
    <div className='qa-Answerer'>
      <div>by {props.answer.answerer_name},</div>
      <div>{props.answer.date } |</div>
      <div>Helpful?</div>
      <div>Yes</div>
      <div>({props.answer.helpfulness}) |</div>
      <div onClick={() => console.log('Clicked')}>No |</div>
      <div>Report</div>
      <Button onClick={markAnswerAsHelpful}>Yes</Button>
      <Button onClick={reportAnswer}>Report</Button>
    </div>
  </div>
  )
  }

export default Answer;