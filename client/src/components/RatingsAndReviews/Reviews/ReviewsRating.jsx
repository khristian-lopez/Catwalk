/* eslint-disable react/prop-types */
import React from 'react';
import Ratings from 'react-ratings-declarative';

const ReviewStars = props => {
    return (
        <Ratings
            rating={props.rating}
            widgetDimensions="15px"
            widgetSpacings="1px"
            widgetRatedColors="yellow"
        >
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
        </Ratings>
    )
}

export default ReviewStars;

