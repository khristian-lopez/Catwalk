import React from 'react';

// eslint-disable-next-line react/prop-types
const RatingsBar = ({star}) => {
    const percentage = Math.round(star * 100)
    
    return (
        <div className="ratingsbar" >
            <div 
                className="ratingsbar-gray"
                style={{     
                    height: "20",
                    width: "100%",
                    backgroundColor: "rgb(220,220,220)",
                }}
            >
                <div 
                    className="ratingsbar-green"
                    style={{
                        padding: "5px",
                        height: "100%",
                        width: `${percentage}%`,
                        backgroundColor: "green",
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default RatingsBar;