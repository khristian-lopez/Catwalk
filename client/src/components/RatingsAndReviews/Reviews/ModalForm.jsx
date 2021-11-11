import React, { useState } from 'react';
import Characteristics from './ModalFiles/characteristics.jsx';
import {Form} from 'react-bootstrap';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ModalForm = ({closeModal}) => {
    const [characterCount, setCharacterCount] = useState(0);
    const [rateValue, rateInputProps] = userateBtns("option")
    const [recValue, recInputProps] = useRecClick("true")
    // TODO
    const [char, setChar] = useState({})
    const [summary, setSummary] = useState("")
    const [review, setReview] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState(null)
    const [selectedImages] = useState([])

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
    const handleChar = e => {
        setChar(e)
    }
    
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
            //chars
            characteristics: char
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
    // TODO: GET CHARS TO FORM SUBMISSION
    return (
        <div>
            <Form className="modalContainer" onSubmit={handleFormSubmit}>
                <div className="form-input">
                    <Form.Group>
                        <Form.Label>Overall Rating</Form.Label>
                        <br></br>
                        <Form.Check
                            inline label="Poor"
                            value="1" {...rateInputProps} checked={rateValue === "1"}
                        />
                        <Form.Check
                            inline label="Fair"
                            value="2" {...rateInputProps} checked={rateValue === "2"}
                        />
                        <Form.Check
                            inline label="Average"
                            value="3" {...rateInputProps} checked={rateValue === "3"}
                        />
                        <Form.Check
                            inline label="Good"
                            value="4" {...rateInputProps} checked={rateValue === "4"}
                        />
                        <Form.Check
                            inline label="Great"
                            value="5" {...rateInputProps} checked={rateValue === "5"}
                        />
                    </Form.Group>
                        <br></br>
                    <Form.Group>
                    <Form.Label>Do you recommend this product?</Form.Label>
                        <br></br>
                        <Form.Check
                            inline label="Yes"
                            {...recInputProps} checked={recValue === "true"}
                            value="true"
                        />
                        <Form.Check
                            inline label="No"
                            {...recInputProps} checked={recValue === "false"}
                            value="false"
                        />
                    </Form.Group>
                        <br></br>
                    <Form.Group>
                        <Form.Label>Summary</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setSummary(e.target.value)}
                            placeholder="Ex: Best purchase ever!"
                            rows={1} maxLength="60"
                        />
                    </Form.Group>
                        <br></br>
                    <Form.Group>
                        <Form.Label>Review</Form.Label>
                        <Form.Control 
                            type="text"
                            onChange={(e) => {
                                setReview(e.target.value)
                                setCharacterCount(e.target.value.length)
                            }}
                            placeholder="Why did you like the product or not?"
                            as="textarea" rows={3}
                            minLength="50" maxLength="1000" required
                        />
                    </Form.Group>
                    <Minimum />
                        <br></br>
                    <Form.Group>
                        <Form.Label>Add photo: (max 5)</Form.Label>
                        <Form.Control
                            type="file" name="image" accept="image/*"
                            onChange={handleSelectImage}
                            multiple
                        />
                        <div>
                            <img src={image} style={{ margin: "10px", width: "200px", height: "200px" }}/>
                            <img src={selectedImages[0]} style={{ margin: "10px", width: "200px", height: "200px" }} />
                            <img src={selectedImages[1]} style={{ margin: "10px", width: "200px", height: "200px" }} />
                            <img src={selectedImages[2]} style={{ margin: "10px", width: "200px", height: "200px" }} />
                            <img src={selectedImages[3]} style={{ margin: "10px", width: "200px", height: "200px" }} />
                        </div>
                    </Form.Group>
                        <br></br>
                    <Form.Group>
                        <Form.Label>Nickname</Form.Label>
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            type="text" placeholder="Ex: jackson11!" 
                            maxLength="60" required
                        />
                        <Form.Text className="text-muted">
                            For privacy reasons, do not use your full name or email address
                        </Form.Text>
                    </Form.Group>
                        <br></br>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" size="30" 
                            placeholder="Ex: jackson11@email.com" 
                            maxLength="60" required
                        />
                        <Form.Text className="text-muted">
                            For authentication reasons, you will not be emailed
                        </Form.Text>
                    </Form.Group>
                </div>
                <button id="review-submit-btn" type="submit" 
                        onSubmit={e => {
                            e.preventDefault()
                            closeModal(false)
                            }
                        }
                >Submit your review!</button>
            </Form>
        </div>
    )
}

export default ModalForm;


{/* <div className="review-overall">Overall rating:
    <p id="review-choices">
        <input className="review-rate" value="1" {...rateInputProps} checked={rateValue === "1"} />Poor
        <input className="review-rate" value="2" {...rateInputProps} checked={rateValue === "2"} />Fair
        <input className="review-rate" value="3" {...rateInputProps} checked={rateValue === "3"} />Average
        <input className="review-rate" value="4" {...rateInputProps} checked={rateValue === "4"} />Good
        <input className="review-rate" value="5" {...rateInputProps} checked={rateValue === "5"} />Great
    </p>
</div> */}
{/* <div className="review-recc" required>Do you recommend this product?
    <p id="recc-answer" >
        <input id="recc-yes" value="true" type="radio"  {...recInputProps} checked={recValue === "true"} />Yes
        <input id="recc-no" value="false" type="radio" {...recInputProps} checked={recValue === "false"} />No
    </p>
</div> */}
{/* <div className="review-photos">Add photo: (max 5)
    <br></br>
    <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleSelectImage}
        multiple
    />
<div>
    <img src={image} style={{ margin: "10px", width: "200px", height: "200px" }}/>
    <img src={selectedImages[0]} style={{ margin: "10px", width: "200px", height: "200px" }} />
    <img src={selectedImages[1]} style={{ margin: "10px", width: "200px", height: "200px" }} />
    <img src={selectedImages[2]} style={{ margin: "10px", width: "200px", height: "200px" }} />
    <img src={selectedImages[3]} style={{ margin: "10px", width: "200px", height: "200px" }} />
</div>
</div> */}
{/* <Characteristics handleChar={handleChar}/> */}
{/* <div className="review-summary">Summary:
    <br></br>
    <textarea 
        type="text" 
        cols="50" 
        placeholder="Ex: Best purchase ever!" 
        maxLength="60"
        onChange={(e) => setSummary(e.target.value)}
        
    />
</div> */}
{/* <div className="review-body">Review: */}
{/* <br></br> */}
{/* <textarea
    onChange={(e) => {
        setReview(e.target.value)
        setCharacterCount(e.target.value.length)
    }}
    type="text" rows="5" cols="50"
    placeholder="Why did you like the product or not?"
    minLength="50" maxLength="1000" required
/> */} {/* </div> */}
{/* <div className="reviewer-name">username:
<br></br>
<input 
    onChange={(e) => setName(e.target.value)}
    type="text" 
    placeholder="Ex: jackson11!" 
    maxLength="60" required
/>
<p style={{ fontSize: "10px" }}>For privacy reasons, do not use your full name or email address</p>
</div> */}