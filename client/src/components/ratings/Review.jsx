import React from 'react';

class Review extends React.Component {
    render() {
        return (
            <div className="Review-container">
                    <p>
                        <span>***** </span>
                        <span> User1234 MM/DD/YYYY</span>
                    </p>
                    <p>user writes random texts and it should appear here etc.</p>
                    <p>Helpful?
                        <a href="#" onClick={ () => console.log('you clicked yes')}>Yes</a>
                        <a>  | </a>
                        <a href="#" onClick={ () => console.log('you clicked no')}> No</a>
                    </p>
            </div>
        )
    }
}

export default Review;