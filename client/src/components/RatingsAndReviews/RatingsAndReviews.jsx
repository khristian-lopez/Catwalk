import React from 'react';
import Ratings from './Ratings/Ratings.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RatingsAndReviews = () => {
    return (
        <div>
            <Container className="rr-container" fluid="md">
                <Row>
                    <Col xs={4}>
                        <h5>RATINGS & REVIEWS</h5>
                        <div className="ratings-container">
                            <Ratings />
                        </div>
                    </Col>
                    <Col>
                        <div className="reviews-container">
                            <ReviewsList />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}

export default RatingsAndReviews;