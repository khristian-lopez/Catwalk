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



{/* <button onClick={ () => this.setState({showForm: true})}>ADD A REVIEW +</button>
                {this.state.showForm ? this.toggleForm() : null} */}

export default ReviewButtons;
