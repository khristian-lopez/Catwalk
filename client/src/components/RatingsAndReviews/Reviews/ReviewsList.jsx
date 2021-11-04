import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortBy from './SortBy.jsx';
import data from '../dummyReviews.js';

class ReviewsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: data.results,
            tiles: 2
        }
        this.renderReviewsTiles = this.renderReviewsTiles.bind(this)
    }
    renderReviewsTiles() {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState({ tiles: this.state.tiles += 2 })
    }
    render() {
        const {reviews, tiles} = this.state;
        if (reviews.length > 0) {
            return (
                <div className="reviewsList">
                    <SortBy review={reviews}/>
                   { reviews.slice(0, tiles).map((review, i) => <ReviewTile review={review} key={i} /> )}
                   { (reviews.length < 2) ? null : (reviews.length < tiles) ? null : <button type="button" onClick={this.renderReviewsTiles}>MORE REVIEWS</button> }
                </div>
            )  
        } else {
            return (
                <div>No reviews for this product</div>
            )
        }
    }
}

export default ReviewsList;