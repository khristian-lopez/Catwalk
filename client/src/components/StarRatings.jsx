import React from 'react';
import Ratings from 'react-ratings-declarative';

export default class StarRatings extends React.Component {
  render() {
    return (
      <Ratings
        rating={3.5}
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
}


