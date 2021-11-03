import React, { useState } from 'react';

const Characteristics = () => {
    const [radioValue, radioInputProps] = useRadioBtns("option");
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
        <div className="review-chars">
            <div>
                <label />Size
                <input value="size1" {...radioInputProps} checked={radioValue === "size1"}/>A size too small
                <input value="size2" {...radioInputProps} checked={radioValue === "size2"}/>1/2 a size too small
                <input value="size3" {...radioInputProps} checked={radioValue === "size3"}/>Perfect
                <input value="size4" {...radioInputProps} checked={radioValue === "size4"}/>1/2 a size too big
                <input value="size5" {...radioInputProps} checked={radioValue === "size5"}/>A size too wide
            </div>
            <div>
                <label />Width
                <input value="width1" {...radioInputProps} checked={radioValue === "width1"}/>Too narrow
                <input value="width2" {...radioInputProps} checked={radioValue === "width2"}/>Slightly narrow
                <input value="width3" {...radioInputProps} checked={radioValue === "width3"}/>Perfect
                <input value="width4" {...radioInputProps} checked={radioValue === "width4"}/>Slightly wide
                <input value="width5" {...radioInputProps} checked={radioValue === "width5"}/>Too wide
            </div>
            <div>
                <label />Comfort
                <input value="comfort1" {...radioInputProps} checked={radioValue === "comfort1"}/>Uncomfortable
                <input value="comfort2" {...radioInputProps} checked={radioValue === "comfort2"}/>Slightly uncomfortable
                <input value="comfort3" {...radioInputProps} checked={radioValue === "comfort3"}/>Ok
                <input value="comfort4" {...radioInputProps} checked={radioValue === "comfort4"}/>Comfortable
                <input value="comfort5" {...radioInputProps} checked={radioValue === "comfort5"}/>Perfect
            </div>
            <div>
                <label />Quality
                <input value="quality1" {...radioInputProps} checked={radioValue === "quality1"}/>Poor
                <input value="quality2" {...radioInputProps} checked={radioValue === "quality2"}/>Below average
                <input value="quality3" {...radioInputProps} checked={radioValue === "quality3"}/>What I expected
                <input value="quality4" {...radioInputProps} checked={radioValue === "quality4"}/>Pretty great
                <input value="quality5" {...radioInputProps} checked={radioValue === "quality5"}/>Perfect
            </div>
            <div>
                <label />Length
                <input value="length1" {...radioInputProps} checked={radioValue === "length1"}/>Runs short
                <input value="length2" {...radioInputProps} checked={radioValue === "length2"}/>Runs slightly short
                <input value="length3" {...radioInputProps} checked={radioValue === "length3"}/>Perfect
                <input value="length4" {...radioInputProps} checked={radioValue === "length4"}/>Runs slightly long
                <input value="length5" {...radioInputProps} checked={radioValue === "length5"}/>Runs long
            </div>
            <div>
                <label />Fit
                <input value="fit1" {...radioInputProps} checked={radioValue === "fit1"}/>Runs tight
                <input value="fit2" {...radioInputProps} checked={radioValue === "fit2"}/>Runs slightly tight
                <input value="fit3" {...radioInputProps} checked={radioValue === "fit3"}/>Perfect
                <input value="fit4" {...radioInputProps} checked={radioValue === "fit4"}/>Runs slightly long
                <input value="fit5" {...radioInputProps} checked={radioValue === "fit5"}/>Runs long
            </div>
        </div>
    )
    
}

export default Characteristics;

{/* <tr>
                    <td><label />Size</td>
                    <td><input type="radio" />A size too small</td>
                    <td><input type="radio" />1/2 a size too small</td>
                    <td><input type="radio" />Perfect</td>
                    <td><input type="radio" />1/2 a size too big</td>
                    <td><input type="radio" />A size too wide</td>
                </tr>
                <tr>
                    <td><label />Width</td>
                    <td><input type="radio" />Too narrow</td>
                    <td><input type="radio" />Slightly narrow</td>
                    <td><input type="radio" />Perfect</td>
                    <td><input type="radio" />Slightly wide</td>
                    <td><input type="radio" />Too wide</td>
                </tr>
                <tr>
                    <td><label />Comfort</td>
                    <td><input type="radio" />Uncomfortable</td>
                    <td><input type="radio" />Slightly uncomfortable</td>
                    <td><input type="radio" />Ok</td>
                    <td><input type="radio" />Comfortable</td>
                    <td><input type="radio" />Perfect</td>
                </tr>
                <tr>
                    <td><label />Quality</td>
                    <td><input type="radio" />Poor</td>
                    <td><input type="radio" />Below average</td>
                    <td><input type="radio" />What I expected</td>
                    <td><input type="radio" />Pretty great</td>
                    <td><input type="radio" />Perfect</td>
                </tr>
                <tr>
                    <td><label />Length</td>
                    <td><input type="radio" />Runs short</td>
                    <td><input type="radio" />Runs slightly short</td>
                    <td><input type="radio" />Perfect</td>
                    <td><input type="radio" />Runs slightly long</td>
                    <td><input type="radio" />Runs long</td>
                </tr>
                <tr>
                    <td><label />Fit</td>
                    <td><input type="radio" />Runs tight</td>
                    <td><input type="radio" />Runs slightly tight</td>
                    <td><input type="radio" />Perfect</td>
                    <td><input type="radio" />Runs slightly long</td>
                    <td><input type="radio" />Runs long</td>
                </tr> */}