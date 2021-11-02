import React from 'react';
import ReviewsRating from '../Reviews/ReviewsRating.jsx';
import data from '../dummyReviews.js';

const RatingsBreakdown = () => {
    const results = data.results
    let ratings = []
    let total = 0
    for (let i = 0; i < results.length; i++) {
        let rating = results[i]['rating']
        ratings.push(rating)
        total += rating
    }
    const avgRating = total / ratings.length
    
    return (
        <div>
            <div className="average-rating" style={{ fontSize: 40 }}>{avgRating}</div>
            <ReviewsRating rating={avgRating} />
            <br></br>
            <div className="bar-container">
                <div>5 Stars</div>
                <progress max="100" value="0" /> 
                <div>4 Stars</div>
                <progress max="100" value="0" />                  
                <div>3 Stars</div>
                <progress max="100" value="0" />                    
                <div>2 Stars</div>
                <progress max="100" value="0" />                    
                <div>1 Stars</div>
                <progress max="100" value="0" />
            </div>
        </div>
    )
}

export default RatingsBreakdown;