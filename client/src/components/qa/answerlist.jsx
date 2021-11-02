import React from 'react';
import Answer from './answer.jsx'
import testAnswers from './testAnswers.jsx'

const AnswerList = (props) => (
  <div className='qa-AnswerList'>
  <div>A:</div>
  <div className='qa-Answers'>
    {testAnswers.results.map((answer) => (
      <Answer answer={answer} key={answer.answer_id}/>
    ))}
  </div>
  </div>

)

export default AnswerList;