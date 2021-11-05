import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Ratings/Ratings.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RatingsAndReviews = ({currentProduct, currentProductReviews}) => {
    // TODO: make axios call to retrieve specific product id 
    // TODO: after making axios call, pass down state into each components
    
    return (
        <div>
            <Container className="rr-container" fluid="md">
                <Row>
                    <Col xs={4}>
                        <h5 id="rr-header">RATINGS & REVIEWS</h5>
                        <div className="ratings-container">
                            <Ratings 
                             currentProduct={currentProduct}
                             currentProductReviews={currentProductReviews}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="reviews-container">
                            <ReviewsList 
                             currentProduct={currentProduct}
                             currentProductReviews={currentProductReviews}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )    
}

RatingsAndReviews.propTypes = {
    currentProduct: PropTypes.object,
    currentProductReviews: PropTypes.object
}

export default RatingsAndReviews;