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
    let averageRating = (ratings / count)
    //console.log(averageRating)
    if (averageRating) {
        return (
                <Row >
                    <Col xs="auto">
                        {averageRating}
                    </Col>
                    <Col xs={4}>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "start" }} > 
                            <ReviewsRating rating={averageRating} />
                        </div>    
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