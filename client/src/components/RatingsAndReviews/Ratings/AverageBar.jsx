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

    let total = 0;
    for (let rating in count) {
        total += count[rating];
    }
    
    return Object.keys(count).map(star => (
        <div key={star}>
            <div>
                {star}
            </div>
            <RatingsBar rating={count[star]} total={total}/>
        </div>
    ))
}

export default AverageBar;