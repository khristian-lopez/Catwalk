/* eslint-disable react/prop-types */
import React from 'react';
import Ratings from 'react-ratings-declarative';

const ReviewsRating = props => {
    //console.log(typeof props.rating)
    return (
        <Ratings
            rating={props.rating}
            widgetDimensions="15px"
            widgetSpacings="1px"
            widgetRatedColors="#5C5A59"
        >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
        </Ratings>
    )
}

export default ReviewsRating;

