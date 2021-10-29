import React from 'react';
import Ratings from './Ratings.jsx';
import ReviewsList from './ReviewsList.jsx';
import ReviewButtons from './ReviewButtons.jsx';

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