import React from 'react';
import Review from './Review.jsx';
import SortBy from './SortBy.jsx';

class ReviewsList extends React.Component {
    render() {
        return (
            <div className="ReviewsList-container">Reviews
                <SortBy />
                <Review />
            </div>
        )
    }
}

export default ReviewsList;