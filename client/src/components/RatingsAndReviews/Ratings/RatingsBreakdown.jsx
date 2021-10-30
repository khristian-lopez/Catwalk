import React from 'react';
import Stars from './Stars.jsx';

class RatingsBreakdown extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (
            <div>
                <div className="average-rating" style={{ fontSize: 40 }}>3.5</div>
                <Stars />
                <br></br>
                <div className="bar-container">
                    <div>5 Stars</div>
                    <progress max="100" value="0" /> 
                    <div>4 Stars</div>
                    <progress max="100" value="0" />                  
                    <div>3 Stars</div>
                    <progress max="100" value="0" />                    
                    <div>2 Stars</div>
                    <progress max="100" value="0" />                    
                    <div>1 Stars</div>
                    <progress max="100" value="0" />
                </div>
            </div>
        )
    }
}

export default RatingsBreakdown;