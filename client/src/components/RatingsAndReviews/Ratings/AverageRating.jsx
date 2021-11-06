/* eslint-disable react/prop-types */
import React from 'react';

const AverageRating = (props) => {
    let ratings = 0;
    let count = 0;
    props.reviews.map(review => {
        ratings += review.rating
        count++;
    })
    let averageRating = (ratings / count).toString().slice(0, 2)

    return (
        <div>{averageRating}</div>
    )

}

export default AverageRating;