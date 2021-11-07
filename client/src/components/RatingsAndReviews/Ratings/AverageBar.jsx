import React from 'react';
import RatingsBar from './RatingsBar.jsx';

const AverageBar = (props) => {
    let count = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    }
    props.reviews.map((review) => {
        count[review.rating] += 1
    })
    
    return Object.keys(count).map(star => (
        <div key={star}>
            <div>{star}</div>
            <RatingsBar />
        </div>
    ))
}

export default AverageBar;