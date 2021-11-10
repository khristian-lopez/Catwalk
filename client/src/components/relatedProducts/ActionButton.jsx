import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ card, productId, handleRemove, openModal, product }) => {

  return (
    <span className='action-button' data-testid='action-button'onClick={card === 'outfit' ? () => handleRemove(productId) : (e) => openModal(e)}>
      { card === 'outfit' ? '\u274c' : 	'\u2B50'}
    </span>
  )
}

ActionButton.propTypes = {
  card: PropTypes.string,
  handleRemove: PropTypes.func,
  productId: PropTypes.number,
  openModal: PropTypes.func,
  product: PropTypes.object
};

export default ActionButton;