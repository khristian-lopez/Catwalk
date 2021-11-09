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
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (props.currentProduct.features) {
      let allFeatures = props.currentProduct.features.concat(props.product.features);
      let combinedFeatures = new Set();
      allFeatures.forEach(feature => combinedFeatures.add(feature.feature));
      setFeatures(Array.from(combinedFeatures));
    }
  }, [props.currentProduct])

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
          <ActionButton card={props.card} openModal={handleShow} />
        </span>
        <ProductInfo product={props.product} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title" as="h6">COMPARING</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container className="modal-container">
            <Row className="modal-row-1">
              <Col xs={6} className="modal-prod-1">
                {props.currentProduct.name}
              </Col>
              <Col xs={6} className="modal-prod-2">
                {props.product.name}
              </Col>
            </Row>
            {props.currentProduct.features
              ? features.map((feature, i) =>
                <Row key={i} className="modal-feature">
                  <Col xs={3} className="modal-col-1">
                    {/* {console.log(props.currentProduct.features)} */}
                    {props.currentProduct.features.findIndex((featObj, i) => featObj.feature === feature) > -1
                      ? props.currentProduct.features[
                        props.currentProduct.features.findIndex((featObj, i) => featObj.feature === feature)
                      ].value
                      : null
                    }
                  </Col>
                  <Col xs={6} className="modal-col-2">
                    {feature}
                  </Col>
                  <Col xs={3} className="modal-col-3">
                    {props.product.features.findIndex((featObj, i) => featObj.feature === feature) > -1
                      ? props.product.features[
                        props.product.features.findIndex((featObj, i) => featObj.feature === feature)
                      ].value
                      : null
                    }
                  </Col>
                </Row>

              )
              : null
            }
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
  card: PropTypes.string,
  currentProduct: PropTypes.object
};

export default RelatedProductCard;