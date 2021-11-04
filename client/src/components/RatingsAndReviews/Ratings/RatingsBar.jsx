import React from 'react';

const RatingsBar = () => {

    return (
        <div className="ratingsbar" >
            <div 
                className="ratingsbar-gray"
                style={{
                    
                    height: "20",
                    width: "80%",
                    backgroundColor: "rgb(220,220,220)",
                    
                }}
            >
                <div 
                    className="ratingsbar-green"
                    style={{
                        padding: "5px",
                        height: "100%",
                        width: "30%",
                        backgroundColor: "green",
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default RatingsBar;