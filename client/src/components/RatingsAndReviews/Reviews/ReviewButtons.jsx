import React from 'react';
import NewForm from './NewForm.jsx';

class ReviewButtons extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showForm: false
        }
        this.hideForm = this.hideForm.bind(this)
    }
    hideForm() {
        this.setState({
            showForm: false
        })
    }
    render() {
        const {showForm} = this.state;

        return (
            <div className="new-review">
                <button>MORE REVIEWS</button>
                <button onClick={ () => this.setState({ showForm: !showForm })}>ADD A REVIEW +</button>
                { showForm ? <NewForm hideForm={this.hideForm}/> : null}
            </div>
        )
    }
}

export default ReviewButtons;
