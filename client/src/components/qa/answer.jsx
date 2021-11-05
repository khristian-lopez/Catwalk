/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import axios from 'axios'

const Answer = (props) => {

  const markHelpful = () => {
    console.log('This answer has been marked as helpful')
    console.log(props.answer.answer_id)

    axios.put(`/qa/answers/${props.answer.answer_id}/helpful`)
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
      <div onClick={() => markHelpful()}>Yes</div>
      <div>({props.answer.helpfulness}) |</div>
      <div onClick={() => console.log('Clicked')}>No |</div>
      <div>Report</div>
    </div>
  </div>
  )
  }

export default Answer;