import React, { useState } from 'react';
import Characteristics from './ModalFiles/characteristics.jsx';


// eslint-disable-next-line react/prop-types
const ModalForm = ({closeModal}) => {
    const [characterCount, setCharacterCount] = useState(0);
    const [radioValue, radioInputProps] = useRadioBtns("option")

    const min = 50
    const Minimum = () => 
        (min - characterCount > 0) ? <p style={{ fontSize: "15px" }}>Minimum required characters left: {min - characterCount}</p> : <p>Minimum reached</p>

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
    const handleRecClick = e => {
        [e.target.name] = e.target.value
    }

    return (
        <div >
            <form className="modalContainer" >
                <div className="form-input">
                    <div className="review-overall">Overall rating:
                        <p id="review-choices">
                            <input value="poor" className="review-rate" {...radioInputProps} checked={radioValue === "poor"} />Poor
                            <input value="fair" className="review-rate" {...radioInputProps} checked={radioValue === "fair"} />Fair
                            <input value="average" className="review-rate" {...radioInputProps} checked={radioValue === "average"} />Average
                            <input value="good" className="review-rate" {...radioInputProps} checked={radioValue === "good"} />Good
                            <input value="great" className="review-rate" {...radioInputProps} checked={radioValue === "great"} />Great
                        </p>
                    </div>
                    <div className="review-recc" required>Do you recommend this product?
                        <p id="recc-answer">
                            <input id="recc-yes" name="yes"  type="radio" onClick={handleRecClick}/>Yes
                            <input id="recc-no" name="no" type="radio" onClick={handleRecClick}/>No
                        </p>
                    </div>
                    <Characteristics />
                    <div className="review-summary">Summary:
                        <br></br>
                        <textarea type="text" cols="50" placeholder="Ex: Best purchase ever!" maxLength="60" />
                    </div>
                    <div className="review-body">Review:
                        <br></br>
                        <textarea
                            onChange={e => setCharacterCount(e.target.value.length)}
                            type="text" rows="5" cols="50"
                            placeholder="Why did you like the product or not?"
                            minLength="50" maxLength="1000" required
                            />
                        <Minimum />
                    </div>
                    <div className="reviewer-name">username:
                        <br></br>
                        <input type="text" placeholder="Ex: jackson11!" maxLength="60"/>
                        <p style={{ fontSize: "10px" }}>For privacy reasons, do not use your full name or email address</p>
                    </div>
                    <div className="reviewer-email">email:
                        <br></br>
                        <input type="email" size="30" placeholder="Ex: jackson11@email.com" maxLength="60" required/>
                        <p style={{ fontSize: "10px" }}>For authentication reasons, you will not be emailed</p>
                    </div>
                </div>
                <button id="review-submit-btn" type="submit" 
                        onClick={e => {
                            e.preventDefault()
                            closeModal(false)
                            }
                        }
                >Submit your review!</button>
            </form>
        </div>
    )
}


export default ModalForm;
