/* eslint-disable react/prop-types */
import React from 'react';
import StarRatings from '../../StarRatings.jsx';
// TODO: try to make dummyData show up for user, date etc.
const ReviewTile = props => {
    return (
        <div className="review-Tile" key={props.review.review_id}>
            <StarRatings />
            <div id="username">{props.review['reviewer_name']}</div>
            <div id="date">{props.review.date}</div>
            <div id="rev-summary">{props.review.summary}</div>
            <div id="rev-body">{props.review.body}</div>
            <div>
            <div>Helpful?
                    <a href="#" onClick={ () => console.log('you clicked yes')}>Yes</a>
                    <a>  | </a>
                    <a href="#" onClick={ () => console.log('you clicked no')}> No</a>
                </div>
            </div>
        </div>
    )
}

export default ReviewTile;