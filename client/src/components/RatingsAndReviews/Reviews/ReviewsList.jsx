import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortBy from './SortBy.jsx';
import data from '../dummyReviews.js';

class ReviewsList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: data.results
        }
    }
    render() {
        const {reviews} = this.state;
        //console.log(reviews)
        return (
            <div className="reviewsList">
                <div>{reviews.length} reviews, </div>
                <SortBy />
               { reviews.map((review, i) => 
               <ReviewTile review={review} key={i} />  
               )}
            </div>
        )  
    }
}

export default ReviewsList;