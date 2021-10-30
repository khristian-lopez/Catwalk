import React from 'react';
import ReviewInfo from './ReviewInfo.jsx';

class Review extends React.Component {
    render() {
        return (
            <div>
                <ReviewInfo />
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