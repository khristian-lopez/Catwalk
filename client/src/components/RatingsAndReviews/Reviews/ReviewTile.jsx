/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsRating from './ReviewsRating.jsx';
import Helpful from './Helpful.jsx';
// TODO: try to make dummyData show up for user, date etc.
const ReviewTile = props => {
    return (
        <div className="review-Tile" key={props.review.review_id}>
            <ReviewsRating rating={props.review.rating}/>
            <div id="star-rating"></div>
            <span id="user-date">
                <p>{props.review['reviewer_name']}</p>
                <p>{props.review.date}</p>
            </span>
            <h4 id="rev-summary" style={{fontWeight: "bold"}}>{props.review.summary}</h4>
            <div id="rev-body">{props.review.body}</div>
            { 
            !props.review.recommend ? null : <p><span>&#10003;</span>I recommend this product</p>
            }
            <Helpful helpfulness={props.review.helpfulness} />
        </div>
    )
}

export default ReviewTile;