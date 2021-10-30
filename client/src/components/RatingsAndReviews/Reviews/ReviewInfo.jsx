import React from 'react';
import dummyReviews from './dummyReviews.js';

const ReviewInfo = props => {
    console.log(dummyReviews)
    return (
        <div className="Review-container">
            <p>
                <span>*****</span><span>username</span><span>MM/DD/YYYY</span>
            </p>
            <p>body</p>
        </div>
    )
}

export default ReviewInfo;