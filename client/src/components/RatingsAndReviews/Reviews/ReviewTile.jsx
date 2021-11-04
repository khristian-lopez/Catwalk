/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsRating from './ReviewsRating.jsx';
import Helpful from './Helpful.jsx';

const ReviewTile = props => {
    let date = props.review.date.slice(0, 10).split('-');
    let formattedDate = `${date[1]}/${date[2]}/${date[0]}`;
    
    return (
        <div className="review-Tile" key={props.review.review_id}>
            <ReviewsRating rating={props.review.rating}/>
            <div></div>
            <span id="rev-user">
                <p>{props.review['reviewer_name']} 
                   {props.review.verified ? <span style={{fontSize: "10px"}}> Verified Purchaser &#10003;</span> : null}
                </p>
                <p id="rev-date">{formattedDate}</p>
            </span>
            <h5 id="rev-summary" style={{fontWeight: "bold"}}>{props.review.summary}</h5>
            <div id="rev-body">{props.review.body}</div>
            {!props.review.recommend ? null : <p id="rev-rec">I recommend this product<span>&#10003;</span></p>}
            {props.review.response ? <p id="rev-response">Response from seller: {props.review.response}</p> : null}
            <Helpful helpfulness={props.review.helpfulness} />
        </div>
    )
}

export default ReviewTile;