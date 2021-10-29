import React from 'react';
import Review from './Review.jsx';

class ReviewsList extends React.Component {
    render() {
        return (
            <div className="ReviewsList-container">Reviews
                <Review />
            </div>
        )
    }
}

export default ReviewsList;