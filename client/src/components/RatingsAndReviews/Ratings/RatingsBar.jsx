import React from 'react';

const RatingsBar = ({totalRate, starRating}) => {
  const percentage = (starRating / totalRate) * 100;

  const filledBars = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: 'green'
  }
  const bar = {
    height: 10,
    width: '80%',
    backgroundColor: 'gray'
  }
  return (
    <div className="ratingsBar">Ratings ----
      <div id="bar" style={bar}>
        <div id="filled-bars" style={filledBars}></div>
      </div>
    </div>
  )
}

export default RatingsBar;