/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button'

import Answer from './answer.jsx'

const AnswerList = (props) => {

const [answers, setAnswers] = useState([]);
const [maxAnswers, setMaxAnswers] = useState(2);
const currentQuestionId = props.question_id;

useEffect(() => {
  axios.get(`/qa/questions/${currentQuestionId}/answers`)
    .then(results => setAnswers(results.data.results.slice(0, maxAnswers)))
    .catch(err => console.error(err));
}, [maxAnswers]);

  return (
  <div className='qa-AnswerList'>
<div>A:</div>
<div className='qa-Answers'>
  {answers.map((answer) => (
    <Answer answer={answer} key={answer.answer_id}/>
  ))}
  <Button variant="dark" onClick={() => setMaxAnswers(50)}>Show more answers</Button>

</div>
</div>)


  }

export default AnswerList;