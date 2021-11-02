import React, { useState } from 'react';
import Characteristics from './characteristics/characteristics.jsx';


// eslint-disable-next-line react/prop-types
const ReviewForm = ({hideModal}) => {
    const [characterCount, setCharacterCount] = useState(0)
    const min = 50
    const Minimum = () => (min - characterCount > 0) ? <p>Minimum required characters left: {min - characterCount}</p> : <p>Minimum reached</p>
    // const showHideClassName = show ? "modal display-block" : "modal display-none"
    return (
        <div /*className={showHideClassName}*/>
            <form className="modal-main" onChange={ () => {} }>
                <div className="form-input">
                    <div className="review-overall">Overall rating:
                        <input type="radio" className="star-rate" />Poor
                        <input type="radio" className="star-rate" />Fair
                        <input type="radio" className="star-rate" />Average
                        <input type="radio" className="star-rate" />Good
                        <input type="radio" className="star-rate" />Great
                    </div>
                    <div required>Do you recommend this product?
                        <input type="radio" />Yes
                        <input type="radio" />No
                    </div>
                    <Characteristics />
                    <div className="review-summary">Summary:
                        <br></br>
                        <input type="text" placeholder="Example: Best purchase ever!" maxLength="60" />
                    </div>
                    <div className="review-body">Review:
                        <br></br>
                        <textarea
                            onChange={e => setCharacterCount(e.target.value.length)}
                            type="text" rows="5"
                            placeholder="Why did you like the product or not?"
                            minLength="50" maxLength="1000" required
                            />
                        <Minimum />
                    </div>
                    <div className="reviewer-name">username:
                        <br></br>
                        <input type="text" placeholder="Example: jackson11!" maxLength="60"/>
                        <p>For privacy reasons, do not use your full name or email address</p>
                    </div>
                    <div className="reviewer-email">email:
                        <br></br>
                        <input type="email" placeholder="Example: jackson11@email.com" maxLength="60" required/>
                        <p>For authentication reasons, you will not be emailed</p>
                    </div>
                </div>
                <button type="submit" onClick={hideModal}>Submit your review!</button>
            </form>
        </div>
    )
}


export default ReviewForm;