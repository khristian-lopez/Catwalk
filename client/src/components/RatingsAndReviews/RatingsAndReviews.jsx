import React from 'react';
import Ratings from './Ratings/RatingsBar.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import ReviewButtons from './Reviews/ReviewButtons.jsx';

class RatingsAndReviews extends React.Component {
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