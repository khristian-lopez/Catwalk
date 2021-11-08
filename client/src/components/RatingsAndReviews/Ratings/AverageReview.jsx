/* eslint-disable react/prop-types */
import React from 'react';
import Ratings from 'react-ratings-declarative';

const AverageReview = () => {
    //console.log(count)
    // TODO: make ratings show up in stars - check typeError
    return (
        //<div></div>
        <Ratings
            rating="5"
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

export default AverageReview;