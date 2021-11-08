/* eslint-disable react/prop-types */
import React from 'react';
import Ratings from 'react-ratings-declarative';

const AverageReview = props  => {
    let ratings = 0;
    // let count = 0;
    props.reviews.map(review => {
        ratings += review.rating
        //count++;
    })
    // TODO: make ratings show up in stars - check typeError
    // let averageRating = (ratings / count)
    let test = ratings / props.reviews.length;
    console.log(test)
    return (
        <div></div>
        // <Ratings
        //     rating={test}
        //     widgetDimensions="15px"
        //     widgetSpacings="1px"
        //     widgetRatedColors="yellow"
        // >
        //     <Ratings.Widget />
        //     <Ratings.Widget />
        //     <Ratings.Widget />
        //     <Ratings.Widget />
        //     <Ratings.Widget />
        // </Ratings>
    )
}

export default AverageReview;