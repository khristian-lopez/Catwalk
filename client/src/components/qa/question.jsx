import React from 'react';
import AnswerList from './answerlist.jsx'
//Question
const Question = (props) => (
  <div className='qa-Questions'>
  <div className='qa-Question'>
    <div>Q:</div>
    <div>{props.question.question_body}</div>
    <div>Helpful?</div>
    <div>Yes</div>
    <div>({props.question.question_helpfulness})</div>
   </div>
   <AnswerList />
   </div>
)

export default Question