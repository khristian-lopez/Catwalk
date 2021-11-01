import React from 'react';
import QuestionList from './questionlist.jsx'
import Search from './questionsearch.jsx'

const Qa = () => (
  <div className='qa-Main'>
    <div>Questions and Answers</div>
    <Search />
    <QuestionList/>
  </div>
)

export default Qa;