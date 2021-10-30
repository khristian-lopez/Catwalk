import React from 'react';

const Helpful = () => (
    <div>
        <div>Helpful?
            <a href="#" onClick={ () => console.log('you clicked yes')}>Yes</a>
            <a>  | </a>
            <a href="#" onClick={ () => console.log('you clicked no')}> No</a>
        </div>
    </div>
)

export default Helpful;