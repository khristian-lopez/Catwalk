import React from 'react';

const RatingsBar = () => {
    
    return (
        <div className="ratingsbar">
            <div className="ratingsbar-unfilled">
                <div 
                    className="ratingsbar-filled"
                    style={{
                        margin: "10px",
                        padding: "5px",
                        height: "10px",
                        width: "100%",
                        backgroundColor: "rgb(220,220,220)"
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default RatingsBar;