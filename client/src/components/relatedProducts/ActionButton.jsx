import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ card }) => {

  const handleRemove = (e) => {
    e.persist();
    console.log(e);
  }

  return (
    <span className='action-button' onClick={e => handleRemove(e)}>
      { card === 'outfit' ? '\u24e7' : '\u2606'}
    </span>
  )
}

ActionButton.propTypes = {
  card: PropTypes.string.isRequired
};

export default ActionButton;