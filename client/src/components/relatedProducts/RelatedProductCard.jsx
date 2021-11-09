import React, { useState, useEffect } from 'react';
import { Slide } from 'pure-react-carousel';
import Modal from 'react-bootstrap/Modal';
import ActionButton from './ActionButton.jsx';
import ProductInfo from './ProductInfo.jsx';
import PropTypes from 'prop-types';

const RelatedProductCard = (props) => {

  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.stopPropagation();
    setShow(true);
  }
  const handleClose = () => setShow(false);

  return (
    <Slide index={props.index}>
      <div className="cards rel-prod-card" onClick={(() => props.handleChangeProduct(props.product.id))}>
        <img className="preview" src={props.product.defaultStyle.photos[0].thumbnail_url} />
        <span>
          <ActionButton card={props.card} openModal={handleShow}/>
        </span>
        <ProductInfo product={props.product}/>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </Slide>
  )
}

RelatedProductCard.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  handleChangeProduct: PropTypes.func,
  card: PropTypes.string
};

export default RelatedProductCard;