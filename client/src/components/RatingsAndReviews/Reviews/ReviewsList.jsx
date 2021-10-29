import React from 'react';
import Review from './Review.jsx';

class ReviewsList extends React.Component {
    render() {
        return (
            <div className="ReviewsList-container">Reviews
                <div className="sort">
                    <label>Sort by:
                        <select>
                            <option>Relevance</option>
                            <option>Newest</option>
                            <option>Helpful</option>
                        </select>
                    </label>
                </div>
                <Review />
            </div>
        )
    }
}

export default ReviewsList;