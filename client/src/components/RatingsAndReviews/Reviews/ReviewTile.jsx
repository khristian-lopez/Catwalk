/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsRating from './ReviewsRating.jsx';
import Helpful from './Helpful.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReviewTile = props => {
    let date = props.review.date.slice(0, 10).split('-');
    let formattedDate = `${date[1]}/${date[2]}/${date[0]}`;
    
    return (
        <div className="review-Tile" key={props.review.review_id}>
            <Row>
                <Col>
                    <ReviewsRating rating={props.review.rating}/>
                </Col>
                <Col xs={4}>
                    <span id="rev-user">
                        <p>{props.review['reviewer_name']} 
                        {props.review.verified ? <p style={{fontSize: "10px"}}> Verified Purchaser &#10003;</p> : null}
                        </p>
                    </span>
                </Col>
                <Col xs={2}>
                    <p id="rev-date" style={{fontSize: "15px"}}>{formattedDate}</p>
                </Col>
            </Row>
            <div id="rev-summary" style={{fontWeight: "bold", fontSize: "18px"}}>{props.review.summary}</div>
            <div id="rev-body" style={{fontSize: "13px"}}>{props.review.body}</div>
            {!props.review.recommend ? null : <p id="rev-rec">I recommend this product<span>&#10003;</span></p>}
            {props.review.response ? 
            <p 
                id="rev-response" style={{fontWeight: "600"}}>Response from seller:
                <p id="seller-response">{props.review.response}</p>
            </p> 
            : null}
            <Helpful helpfulness={props.review.helpfulness} />
        </div>
    )
}

export default ReviewTile;