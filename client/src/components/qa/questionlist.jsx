import React from 'react';
import Question from './question.jsx'
import testQuestions from './testQuestions.jsx'
//QuestionList takes in an array of questions and renders them out
//By default, 4 questions will be displayed
//Each question should have 2 answers for each question
//Upon click of a 'More Answered Questions' button, all of the questions and answers load
//Questions are ordered based on the quantity of 'Helpful' tokens they have
//By default, all questions will be shown
//We should be able to filter questions by search terms
//If there are no questions, there should be a button to submit a new question

const QuestionList = (props) => (
  <div className='qa-QuestionList'>
    {testQuestions.results.map((question) => (
      <Question question={question} key={question.question_id}/>
    ))}
  </div>

)

export default QuestionList;