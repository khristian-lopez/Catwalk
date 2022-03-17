/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import ModalForm from './ModalForm.jsx';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';

const ReviewButtons = ({productId}) => {
    //console.log(productId)
    const [product, getProduct] = useState([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        axios.get(`/products/${productId}`)
            .then(res => getProduct(res.data))
            .catch(err => console.error('Cannot get current product', err))
    }, [productId])
    // console.log(product)
    return (
        <div className="new-review">
            <Button variant="dark" className="openModalBtn" onClick={() => setOpenModal(true)}>Add a review +</Button>
            <Modal
                show={openModal}
                onHide={() => setOpenModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="review-product" >Write Your Review</Modal.Title>
                </Modal.Header>
                <Modal.Body id="review-product-name" >
                    <h5>About the {product.name}</h5>
                </Modal.Body>
                <ModalForm closeModal={setOpenModal} productId={productId}/>
            </Modal>
        </div>
    )
}

export default ReviewButtons;

// const ReviewButtons = ({productId}) => {
//     //console.log(productId)
//     const [product, getProduct] = useState([])
//     const [openModal, setOpenModal] = useState(false)

//     useEffect(() => {
//         axios.get(`/products/${productId}`)
//             .then(res => getProduct(res.data))
//             .catch(err => console.error('Cannot get current product', err))
//     }, [productId])
//     return (
//         <div className="new-review">
//             <button className="openModalBtn" onClick={() => setOpenModal(true)}>ADD A REVIEW +</button>
//             <Modal
//                 show={openModal}
//                 onHide={() => setOpenModal(false)}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="review-product" >Write Your Review</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body id="review-product-name" >
//                     <h5>About the {product.name}</h5>
//                 </Modal.Body>
//                 <ModalForm closeModal={setOpenModal}/>
//             </Modal>
//         </div>
//     )
// }