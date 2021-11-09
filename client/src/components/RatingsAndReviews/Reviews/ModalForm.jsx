import React, { useState } from 'react';
import Characteristics from './ModalFiles/characteristics.jsx';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ModalForm = ({closeModal}) => {
    const [characterCount, setCharacterCount] = useState(0);
    const [rateValue, rateInputProps] = userateBtns("option")
    const [recValue, recInputProps] = useRecClick("true")
    // TODO
    //const [char, setChar] = useState("")
    const [summary, setSummary] = useState("")
    const [review, setReview] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [selectedImages, setSelectImages] = useState([])

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
    
    function useRecClick(name) {
        const [value, setState] = useState(null)
        const handleChange = e => { setState(e.target.value) }
        const inputProps = {
            name, 
            type: "radio",
            onChange: handleChange
        }
        return [value, inputProps]
    }
    // TODO: GRAB CHARS
    // function handleChar(choice) {
    //     const newChars = JSON.parse(JSON.stringify({}))
    //     newChars[choice.id] = choice.value;
    //     setChar({ characteristics: newChars })
    // }
    
    const handleSelectImage = e => {
        let url = URL.createObjectURL(e.target.files[0])
        if (image) {
            selectedImages.push(image)
        }
        if (selectedImages.length < 5) {
            setImage(url);
        }
    }

    // handleFormSubmit
    const handleFormSubmit = e => {
        e.preventDefault()
        let uploadedImages = [image, ...selectedImages]
        const input = {
            // product_id: 
            rating: Number(rateValue),
            recommend: (recValue === "true"),
            summary: summary,
            body: review,
            name: name,
            email: email,
            photos: uploadedImages,
            characteristics: {}
            //photos, chars
        }
        console.log(input)
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
    // TODO: IMAGE RESIZE, GET CHARS TO FORM SUBMISSION
    return (
        <div>
            <form className="modalContainer" onSubmit={handleFormSubmit}>
                <div className="form-input">
                    <div className="review-overall">Overall rating:
                        <p id="review-choices">
                            <input className="review-rate" value="1" {...rateInputProps} checked={rateValue === "1"} />Poor
                            <input className="review-rate" value="2" {...rateInputProps} checked={rateValue === "2"} />Fair
                            <input className="review-rate" value="3" {...rateInputProps} checked={rateValue === "3"} />Average
                            <input className="review-rate" value="4" {...rateInputProps} checked={rateValue === "4"} />Good
                            <input className="review-rate" value="5" {...rateInputProps} checked={rateValue === "5"} />Great
                        </p>
                    </div>
                    <div className="review-recc" required>Do you recommend this product?
                        <p id="recc-answer" >
                            <input id="recc-yes" value="true" type="radio"  {...recInputProps} checked={recValue === "true"} />Yes
                            <input id="recc-no" value="false" type="radio" {...recInputProps} checked={recValue === "false"} />No
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
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>
                    <div className="review-body">Review:
                        <br></br>
                        <textarea
                            onChange={(e) => {
                                setReview(e.target.value)
                                setCharacterCount(e.target.value.length)
                            }}
                            type="text" rows="5" cols="50"
                            placeholder="Why did you like the product or not?"
                            minLength="50" maxLength="1000" required
                        />
                        <Minimum />
                    </div>
                    <div className="review-photos">Add photo:
                        <br></br>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleSelectImage}
                            multiple
                        />
                    <div>
                        <img src={image} />
                        <img src={selectedImages[0]} />
                        <img src={selectedImages[1]} />
                        <img src={selectedImages[2]} />
                        <img src={selectedImages[3]} />
                    </div>
                    </div>
                    <div className="reviewer-name">username:
                        <br></br>
                        <input 
                            onChange={(e) => setName(e.target.value)}
                            type="text" 
                            placeholder="Ex: jackson11!" 
                            maxLength="60" required
                        />
                        <p style={{ fontSize: "10px" }}>For privacy reasons, do not use your full name or email address</p>
                    </div>
                    <div className="reviewer-email">email:
                        <br></br>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            size="30" 
                            placeholder="Ex: jackson11@email.com" 
                            maxLength="60" required
                        />
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

//const handleSummary = (e) => setSummary(e.target.value);    
// const handleReview = (e) => {
//     setReview(e.target.value)
//     setCharacterCount(e.target.value.length)
// }
// const handleName = (e) => setName(e.target.value);
// const handleEmail = (e) => setEmail(e.target.value);