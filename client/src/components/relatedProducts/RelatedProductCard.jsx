import React, { useState, useEffect } from 'react';
import { Slide } from 'pure-react-carousel';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
          <ActionButton card={props.card} product={props.product} openModal={handleShow}/>
        </span>
        <ProductInfo product={props.product}/>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title as='h6'>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container className="modal-container">
            <Row className="modal-row-1">
              <Col xs={6}>
                Product Short Name
              </Col>
              <Col xs={6}>
                Product Short Name
              </Col>
            </Row>
            <Row className="modal-row-2">
              <Col xs={2} className="modal-col-1">
                .col-xs-3
              </Col>
              <Col xs={8} className="modal-col-2">
                .col-xs-6
              </Col>
              <Col xs={2} className="modal-col-3">
                .col-xs-3
              </Col>
            </Row>
          </Container>
        </Modal.Body>
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