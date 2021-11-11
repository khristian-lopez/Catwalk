/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsRating from '../Reviews/ReviewsRating.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AverageRating = (props) => {
    let ratings = 0;
    let count = 0;
    props.reviews.map(review => {
        ratings += review.rating
        count++;
    })
    // (ratings / count).toString().slice(0,2)
    let averageRating = Math.round(ratings / count)
    //console.log(typeof averageRating)
    if (averageRating) {
        return (
                <Row >
                    <Col xs={1}>
                        {averageRating}
                    </Col>
                    <Col xs={4}>
                        <ReviewsRating rating={averageRating}/>
                    </Col>
                </Row>
        )
    } else {
        return (
            <div>No Reviews</div>
        )
    }

}

export default AverageRating;