import React, {useState} from 'react';
import ModalForm from './ModalForm.jsx';

const ReviewButtons = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className="new-review">
            <button className="openModalBtn" onClick={() => setOpenModal(true)}>ADD A REVIEW +</button>
            { openModal && <ModalForm closeModal={setOpenModal}/>}
        </div>
    )
}

export default ReviewButtons;