import React from 'react';
import QuestionList from './questionlist.jsx'
import Search from './questionsearch.jsx'

const Qa = () => (
  <div className='qa-Main'>
    QUESTIONS AND ANSWERS
    <Search />
    <QuestionList/>
  </div>
)

export default Qa;