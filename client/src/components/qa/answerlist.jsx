/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Answer from './answer.jsx'

const AnswerList = (props) => {

const [answers, setAnswers] = useState([]);
const [maxAnswers, setMaxAnswers] = useState(2);
const currentProductId = props.question_id;

useEffect(() => {
  axios.get(`/qa/questions/${currentProductId}/answers`)
    .then(results => setAnswers(results.data.results.slice(0, maxAnswers)))
    .catch(err => console.error(err));
}, []);

  return (
  <div className='qa-AnswerList'>
<div>A:</div>
<div className='qa-Answers'>
  {answers.map((answer) => (
    <Answer answer={answer} key={answer.answer_id}/>
  ))}
</div>
</div>)


  }

export default AnswerList;