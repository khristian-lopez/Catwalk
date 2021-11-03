import React, { useState } from 'react';
import Characteristics from './ModalFiles/characteristics.jsx';


// eslint-disable-next-line react/prop-types
const ModalForm = ({closeModal}) => {
    const [characterCount, setCharacterCount] = useState(0);
    const [radioValue, radioInputProps] = useRadioBtns("option")
    const min = 50
    const Minimum = () => (min - characterCount > 0) ? <p>Minimum required characters left: {min - characterCount}</p> : <p>Minimum reached</p>

    function useRadioBtns(name) {
        const [value, setState] = useState(null);
        const handleChange = e => { setState(e.target.value) }
        const inputProps = {
            name, 
            type: "radio",
            onChange: handleChange
        }
        return [value, inputProps]
    }
    return (
        <div className="modalBackground">
            <form className="modalContainer" >
                <div className="form-input">
                    <button onClick={() => closeModal(false)}> X </button>
                    <div className="review-overall">Overall rating:
                        <input value="poor" className="star-rate" {...radioInputProps} checked={radioValue === "poor"} />Poor
                        <input value="fair" className="star-rate" {...radioInputProps} checked={radioValue === "fair"} />Fair
                        <input value="average" className="star-rate" {...radioInputProps} checked={radioValue === "average"} />Average
                        <input value="good" className="star-rate" {...radioInputProps} checked={radioValue === "good"} />Good
                        <input value="great" className="star-rate" {...radioInputProps} checked={radioValue === "great"} />Great
                    </div>
                    <div required>Do you recommend this product?
                        <input value="yes" {...radioInputProps} checked={radioValue === "yes"} />Yes
                        <input value="no" {...radioInputProps} checked={radioValue === "no"} />No
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
                <button type="submit" >Submit your review!</button>
            </form>
        </div>
    )
}


export default ModalForm;
