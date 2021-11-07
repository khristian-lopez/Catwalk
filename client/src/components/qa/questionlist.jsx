/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

import Question from './question.jsx'

const QuestionList = (props) => {
  const [questions, setQuestions] = useState([]);
  const [maxQuestions, setMaxQuestions] = useState(4);
  const currentProductId = props.currentProductId;

  useEffect(() => {
    axios.get(`/qa/questions/${currentProductId}`)
      .then(results => setQuestions(results.data.results.slice(0, maxQuestions)))
      .catch(err => console.error(err));
  }, [maxQuestions]);

  return (
  <div className='qa-QuestionList'>
    {questions.map((question) => (
      <Question question={question} key={question.question_id}/>
    ))}
    <Button onClick={() => setMaxQuestions(500)}>Show more questions</Button>
  </div>
  )
    }

export default QuestionList;