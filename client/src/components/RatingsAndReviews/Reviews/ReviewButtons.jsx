import React, {useState} from 'react';
import ModalForm from './ModalForm.jsx';
import Modal from 'react-bootstrap/Modal';

const ReviewButtons = () => {
    const [openModal, setOpenModal] = useState(false)
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
                    <Modal.Title>Add your review here:</Modal.Title>
                </Modal.Header>
                <ModalForm closeModal={setOpenModal}/>
            </Modal>
        </div>
    )
}

export default ReviewButtons;
