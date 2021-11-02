import React from 'react';
import RatingsBreakdown from './Ratings/RatingsBreakdown.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import ReviewButtons from './Reviews/ReviewButtons.jsx';

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
                <h5>RATINGS & REVIEWS</h5>
                <RatingsBreakdown />
                <ReviewsList />
                <ReviewButtons />
            </div>
        )
    }
}

export default RatingsAndReviews;