/* eslint-disable react/prop-types */
import React from 'react';

const Answer = (props) => (
  <div>
    <div className='qa-Answer'>{props.answer.body}</div>
    <div className='qa-Answerer'>
      <div>by {props.answer.answerer_name},</div>
      <div>{props.answer.date}</div>
      <div>Helpful?</div>
      <div>Yes</div>
      <div>({props.answer.helpfulness})</div>
      <div>Report</div>
    </div>
  </div>
)

export default Answer;