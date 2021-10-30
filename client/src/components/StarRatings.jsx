import React from 'react';
import Ratings from 'react-ratings-declarative';

export default class StarRatings extends React.Component {
  render() {
    return (
      <Ratings
        rating={3.8}
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
}


