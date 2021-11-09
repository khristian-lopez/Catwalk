/* eslint-disable react/prop-types */
import React from 'react';

const AverageRating = (props) => {
    let ratings = 0;
    let count = 0;
    props.reviews.map(review => {
        ratings += review.rating
        count++;
    })
    // (ratings / count).toString().slice(0,2)
    let averageRating = Math.round(ratings / count)
    //console.log(typeof averageRating)
    if (averageRating) {
        return (
            <div>{averageRating}</div>
        )
    } else {
        return (
            <div>No Reviews</div>
        )
    }

}

export default AverageRating;