import React from 'react';
import Ratings from './Ratings/Ratings.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import ReviewButtons from './Reviews/ReviewButtons.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class RatingsAndReviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            length: 2
        }
    }
// TODO: make sure to only show 2 reviews, if there are > 2 implement functionality to "more reviews"
    render() {
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
                            <div className="reviews-btn">
                                <ReviewButtons />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default RatingsAndReviews;