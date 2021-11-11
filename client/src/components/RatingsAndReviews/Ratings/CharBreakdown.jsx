/* eslint-disable react/prop-types */
import React from 'react';
import {Row} from 'react-bootstrap';

const CharBreakdown = (props) => {
    let chars = props.metadata.characteristics
    // console.log('chars', chars)
    if (chars !== undefined) {
        return (
            <div className="charBreakdown" >
                <h5>Characteristics</h5>
                <div className="char-bar">
                    {chars.Size ?
                    <Row>
                        <h6>Size</h6>
                        <input type="range" min="1" max="5" value={chars.Size.value} />  
                    </Row>
                    : null }
                    <br></br>
                    {chars.Width ?
                    <Row >
                        <h6>Width</h6>
                        <input type="range" min="1" max="5" value={chars.Width.value} />
                    </Row>
                    : null }
                    <br></br>
                    {chars.Comfort ?
                    <Row >
                        <h6>Comfort</h6>
                        <input type="range" min="1" max="5" value={chars.Comfort.value} />
                    </Row>
                    : null }
                    <br></br>
                    {chars.Quality ?
                    <Row >
                        <h6>Quality</h6>
                        <input type="range" min="1" max="5" value={chars.Quality.value} />
                    </Row>
                    : null }
                    <br></br>
                    {chars.Length ?
                    <Row >
                        <h6>Length</h6>
                        <input type="range" min="1" max="5" value={chars.Length.value} />
                    </Row>
                    : null }
                    <br></br>
                    {chars.Fit ?
                    <Row >
                        <h6>Fit</h6>
                        <input type="range" min="1" max="5" value={chars.Fit.value} />
                    </Row>
                    : null }
                </div>
            </div>
        )
    } else {
        return (
            <div>Product breakdown not available</div>
        )
    }
}

export default CharBreakdown;