import React from 'react';
import Ratings from './Ratings/RatingsBar.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import ReviewButtons from './Reviews/ReviewButtons.jsx';
import data from './dummyReviews.js';

class RatingsAndReviews extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Ratings />
                <ReviewsList />
                <ReviewButtons />
            </div>
        )
    }
}

export default RatingsAndReviews;