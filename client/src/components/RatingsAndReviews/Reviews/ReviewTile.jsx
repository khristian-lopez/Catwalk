/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsRating from './ReviewsRating.jsx';
import Helpful from './Helpful.jsx';

const ReviewTile = props => {
    return (
        <div className="review-Tile" key={props.review.review_id}>
            <ReviewsRating rating={props.review.rating}/>
            <div id="star-rating"></div>
            <span id="user-date">
                <p>{props.review['reviewer_name']} 
                   {props.review.verified ? <span style={{fontSize: "10px"}}> Verified Purchaser &#10003;</span> : null}
                </p>
                <p>{props.review.date}</p>
            </span>
            <h5 id="rev-summary" style={{fontWeight: "bold"}}>{props.review.summary}</h5>
            <div id="rev-body">{props.review.body}</div>
            {!props.review.recommend ? null : <p><span>&#10003;</span>I recommend this product</p>}
            {props.review.response ? <p id="review-response">Response from seller: {props.review.response}</p> : null}
            <Helpful helpfulness={props.review.helpfulness} />
        </div>
    )
}

export default ReviewTile;