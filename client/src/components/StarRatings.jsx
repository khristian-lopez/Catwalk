import React from 'react';
import Ratings from 'react-ratings-declarative';
import PropTypes from 'prop-types';

export default class StarRatings extends React.Component {
  render() {
    if (this.props.rating) {
      return (
        <Ratings
          rating={this.props.rating}
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
    } else {
      // render nothing if product has no reviews
      return null;
    }
  }
}

StarRatings.propTypes = {
  rating: PropTypes.number
}

