import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ card }) => (
  <span className='action-button'>
    { card === 'outfit' ? '\u24e7' : '\u2606'}
  </span>
)

ActionButton.propTypes = {
  card: PropTypes.string.isRequired
};

export default ActionButton;