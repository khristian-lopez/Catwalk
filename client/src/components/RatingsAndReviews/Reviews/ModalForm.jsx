import React, { useState } from 'react';
import Characteristics from './ModalFiles/characteristics.jsx';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ModalForm = ({closeModal}) => {
    const [characterCount, setCharacterCount] = useState(0);
    const [rateValue, rateInputProps] = userateBtns("option")
    const [recValue, recInputProps] = useRecClick(null)
    const [summary, setSummary] = useState('')
    const [review, setReview] = useState('')

    const min = 50
    const Minimum = () => 
        (min - characterCount > 0) ? <p style={{ fontSize: "15px" }}>Minimum required characters left: {min - characterCount}</p> : <p>Minimum reached</p>

    function userateBtns(name) {
        const [value, setState] = useState(null);
        const handleChange = e => { setState(e.target.value) }
        const inputProps = {
            name, 
            type: "radio",
            onChange: handleChange
        }
        return [value, inputProps]
    }
    // (e.target.value === "yes") ? setRecValue(true) : setRecValue(false);
    function useRecClick(name) {
        const [value, setState] = useState(null)
        const handleRecClick = e => { setState(e.target.value) }
        const inputProps = {
            name, 
            type: "radio",
            onChange: handleRecClick
        }
        return [value, inputProps]
    }
    function handleSummary(e) {
        setSummary(e.target.value)
    }
    function handleReview(e) {
        setReview(e.target.value)
        setCharacterCount(e.target.value.length)
    }
    
    // handleFormSubmit
    const handleFormSubmit = e => {
        e.preventDefault()
        const input = {
            rating: Number(rateValue),
            recommend: Boolean(recValue),
            summary: summary,

        }
    }
    // create axios post request to add review
    const addReview = data => {
        return axios.post(`/reviews`, data, {
            header: {
                'Content-type': 'multipart/form-data'
            }
        })
        .then(res => console.log(res))
        .catch(err => console.error('Cannot add review', err))
    }
    console.log('check', rateValue)
    console.log('rec', recValue)
    console.log('summary', summary)
    return (
        <div>
            <form className="modalContainer" onSubmit={handleFormSubmit}>
                <div className="form-input">
                    <div className="review-overall">Overall rating:
                        <p id="review-choices">
                            <input value="1" className="review-rate" {...rateInputProps} checked={rateValue === "1"} />Poor
                            <input value="2" className="review-rate" {...rateInputProps} checked={rateValue === "2"} />Fair
                            <input value="3" className="review-rate" {...rateInputProps} checked={rateValue === "3"} />Average
                            <input value="4" className="review-rate" {...rateInputProps} checked={rateValue === "4"} />Good
                            <input value="5" className="review-rate" {...rateInputProps} checked={rateValue === "5"} />Great
                        </p>
                    </div>
                    <div className="review-recc" required>Do you recommend this product?
                        <p id="recc-answer">
                            <input id="recc-yes" value="true"  {...recInputProps} checked={recValue === "true"} />Yes
                            <input id="recc-no" value="false" {...recInputProps} checked={recValue === "false"} />No
                        </p>
                    </div>
                    <Characteristics />
                    <div className="review-summary">Summary:
                        <br></br>
                        <textarea 
                            type="text" 
                            cols="50" 
                            placeholder="Ex: Best purchase ever!" 
                            maxLength="60"
                            onChange={handleSummary}
                        />
                    </div>
                    <div className="review-body">Review:
                        <br></br>
                        <textarea
                            onChange={handleReview}
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
                        onSubmit={e => {
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
