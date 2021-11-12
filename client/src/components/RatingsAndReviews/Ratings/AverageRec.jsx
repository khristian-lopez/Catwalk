/* eslint-disable react/prop-types */
import React from 'react';

const AverageRec = (props) => {
    let recommend = [];
    props.reviews.map(review => {
        recommend.push(review.recommend)
    })
    let recommendCount = recommend.filter(Boolean).length;
    let averageRecommend = Math.round(recommendCount / recommend.length * 100)
    if (averageRecommend) {
        return (
            <div>{averageRecommend}% of reviews recommend this product</div>
        )
    } else {
        return (
            <div>No recommendation available</div>
        )
    }
}

export default AverageRec;