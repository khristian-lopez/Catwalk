import React from 'react';
import ReviewForm from './ReviewForm.jsx';

class ReviewButtons extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }
    showModal() {
        this.setState({ showForm: true })
    }
    hideModal() {
        this.setState({ showForm: false })
    }
    render() {
        const {showForm} = this.state;
        return (
            <div className="new-review">
                {/* <button>MORE REVIEWS</button> */}
                <button type="button" onClick={this.showModal}>ADD A REVIEW +</button>
                { showForm ? <ReviewForm show={showForm} hideModal={this.hideModal} /> : null}
            </div>
        )
    }
}

export default ReviewButtons;
