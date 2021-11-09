/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import ModalForm from './ModalForm.jsx';
import Modal from 'react-bootstrap/Modal';
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
    return (
        <div className="new-review">
            <button className="openModalBtn" onClick={() => setOpenModal(true)}>ADD A REVIEW +</button>
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
                <ModalForm closeModal={setOpenModal}/>
            </Modal>
        </div>
    )
}

export default ReviewButtons;

// const ReviewButtons = () => {
//     const [openModal, setOpenModal] = useState(false)
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
//                     <Modal.Title>Write Your Review</Modal.Title>
//                 </Modal.Header>
//                 <ModalForm closeModal={setOpenModal}/>
//             </Modal>
//         </div>
//     )
// }