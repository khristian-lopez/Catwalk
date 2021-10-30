import React from 'react';

const NewForm = ({hideForm}) => {
    return (
        <form onSubmit={hideForm}>
            <div className="form-input">
                <div required>Do you recommend this product?
                    <input type="radio" />Yes
                    <input type="radio" />No
                </div>
                <div className="review-summary">Write a one-liner:
                    <br></br>
                    <input type="text" placeholder="I love this product!" maxLength="60" />
                </div>
                <div className="review-body">Review:
                    <br></br>
                    <textarea 
                        type="text" rows="4"
                        placeholder="Explain why you like this product or not"
                        minLength="50" maxLength="1000" required
                    />
                </div>
                <div className="reviewer-name">name:
                    <br></br>
                    <input type="text" placeholder="ex. John Doe" maxLength="60"/>
                </div>
                <div className="reviewer-email">email:
                    <br></br>
                    <input type="text" placeholder="example@email.com" maxLength="60" required/>
                </div>
            </div>
            <button type="submit">Submit your review!</button>
        </form>
    )
}


export default NewForm;