/* eslint-disable react/prop-types */
import React from 'react';

const Helpful = props => (
    <div>
        <div>Helpful?
            <a href="#" onClick={ () => console.log('you clicked yes')}>Yes</a> ({props.helpfulness})
        </div>
    </div>
)

export default Helpful;