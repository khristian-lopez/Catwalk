import React from 'react';

const RatingsBar = ({count}) => {
    let percent = (count * 100) / 10;
    return (
        <div className="ratingsbar">
            <div className="ratingsbar-unfilled">
                <div className="ratingsbar-filled" 
                    style={{width: `${percent}`}}>
                </div>
            </div>
        </div>
    )
}

export default RatingsBar;