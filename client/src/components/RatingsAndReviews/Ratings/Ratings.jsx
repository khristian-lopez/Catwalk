import React from 'react';
import data from '../dummyReviews.js';
import ReviewsRating from '../Reviews/ReviewsRating.jsx';
import RatingsBar from './RatingsBar.jsx';

const Ratings = () => {
    let results = data.results
    let ratings = []
    let total = 0
    for (let i = 0; i < results.length; i++) {
        let rating = results[i]['rating']
        ratings.push(rating)
        total += rating
    }
    const avgRating = total / ratings.length

    let starCount = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    }
    
    const stars = results.map(review => {
        starCount[review.rating] += 1;
        
        return starCount;
    }, stars)
    console.log(starCount)
    // TODO: fix ratings bar
    return (
        <div>
            <div className="average-rating" style={{ fontSize: 40 }}>{avgRating}</div>
            <ReviewsRating rating={avgRating} />
            <br></br>
            <div className="bar-container">
                    <div>5 Stars</div>
                    <RatingsBar count={starCount[5]}/> 
                    <div>4 Stars</div>
                    <RatingsBar count={starCount[4]}/>                  
                    <div>3 Stars</div>
                    <RatingsBar count={starCount[3]}/>                    
                    <div>2 Stars</div>
                    <RatingsBar count={starCount[2]}/>                    
                    <div>1 Stars</div>
                    <RatingsBar count={starCount[1]}/>
            </div>
            
        </div>
    )
}

export default Ratings;

{/* <div>5 Stars</div>
                    <progress max="100" value="0" /> 
                    <div>4 Stars</div>
                    <progress max="100" value="0" />                  
                    <div>3 Stars</div>
                    <progress max="100" value="0" />                    
                    <div>2 Stars</div>
                    <progress max="100" value="0" />                    
                    <div>1 Stars</div>
                    <progress max="100" value="0" /> */}