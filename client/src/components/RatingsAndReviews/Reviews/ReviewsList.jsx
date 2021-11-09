/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import ReviewTile from './ReviewTile.jsx';
import SortBy from './SortBy.jsx';
import ReviewButton from './ReviewButtons.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class ReviewsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            tiles: 2
        }
        this.renderReviewsTiles = this.renderReviewsTiles.bind(this)
    }
    // fetch API reviews
    componentDidMount() {
        axios.get(`/reviews/${this.props.currentProduct.product_id}`)
            .then(results => this.setState({ reviews: results.data.results}))
            .catch(err => console.error('Cannot retrieve reviews for product', err))
    }

    renderReviewsTiles() {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({ tiles: this.state.tiles += 2 })
    }
    render() {
        const {reviews, tiles} = this.state;
        if (reviews.length > 0) {
            return (
                <div data-testid="reviewsList">
                    <div className="reviewsList" >
                        <SortBy review={reviews}/>
                    <div className="reviewTiles" >
                        { reviews.slice(0, tiles).map((review, i) => <ReviewTile review={review} key={i} /> )}
                    </div>
                    </div>
                    <div className="reviews-btn">
                        <Row xs="auto">
                            <Col>
                                { (reviews.length < 2) ? null : (reviews.length <= tiles) ? null : <button type="button" onClick={this.renderReviewsTiles}>MORE REVIEWS</button> }
                            </Col>
                            <Col>
                                <ReviewButton />
                            </Col>
                        </Row>
                    </div>
                </div>
            )  
        } else {
            return (
                <div>No reviews for this product</div>
            )
        }
    }
}

// ReviewsList.propTypes = {
//     currentProduct: PropTypes.number.isRequired,
// }

export default ReviewsList;

