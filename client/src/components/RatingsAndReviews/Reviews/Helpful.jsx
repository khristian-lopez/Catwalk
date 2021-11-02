/* eslint-disable react/prop-types */
import React, { useState }from 'react';

const Helpful = props => {

    return (
        <div>
            <div id="review-helpful">Helpful?
                <a href="#" onClick={ () => console.log('you clicked yes')}>Yes</a>({props.helpfulness})
                <a href="#" onClick={ () => console.log('you clicked no')}>No</a>
            </div>
        </div>
    )
}

export default Helpful;