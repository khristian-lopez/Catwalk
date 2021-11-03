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

// class ReviewButtons extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             showForm: false
//         }
//         this.showModal = this.showModal.bind(this)
//         this.hideModal = this.hideModal.bind(this)
//     }
//     showModal() {
//         this.setState({ showForm: true })
//     }
//     hideModal() {
//         this.setState({ showForm: false })
//     }
//     render() {
//         const {showForm} = this.state;
//         return (
//             <div className="new-review">
//                 <button type="button" onClick={this.showModal}>ADD A REVIEW +</button>
//                 { showForm ? <ReviewForm show={showForm} hideModal={this.hideModal} /> : null}
//             </div>
//         )
//     }
// }