/* eslint-disable react/prop-types */
import React from 'react';

const Helpful = props => {
    // need to extract onClick options 
    // const handleClick = e => (e.target.value === "yes") ? props.recommended(true) : props.recommended(false);

    return (
        <div>
            <div id="review-helpful">Helpful?
                <a style={{margin: "2px", padding: "2px"}} href="#" onClick={ () => console.log('you clicked yes')}>Yes</a>({props.helpfulness})
                <a style={{margin: "2px", padding: "2px"}} id="rev-help-no" href="#" onClick={ () => console.log('you clicked no')}>No</a>
            </div>
        </div>
    )
}

export default Helpful;