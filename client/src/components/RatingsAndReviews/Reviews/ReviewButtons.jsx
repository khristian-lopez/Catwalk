import React from 'react';

class ReviewButtons extends React.Component {
    
    state = {
        showForm: false
    }
    
    toggleForm = () => {
        return (
            <div>
                <form className="toggleForm">
                    <label>Write your review:
                        <input type="text"></input>
                    </label>
                </form>
            </div>
        )
    }
    render() {
        const {showForm} = this.state;
        return (
            <div>
                <button>MORE REVIEWS</button>
                <button onClick={ () => this.setState({showForm: !showForm})}>ADD A REVIEW +</button>
                {showForm ? this.toggleForm() : null}
            </div>
        )
    }
}

export default ReviewButtons;
