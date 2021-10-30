import React from 'react';
import ReviewTile from './ReviewTile.jsx';

class Review extends React.Component {
    render() {
        
        return (
            <div>
                <ReviewTile />
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