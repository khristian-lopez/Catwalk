import React, { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const RatingsBar = ({rating, total}) => {
    const [rate, setRate] = useState(rating)
    // TODO: do something with total to get correct bar rate
    useEffect( () => {
        setRate((rating / total) * 100)
    }, [rating])

    // console.log('rating: ', rate)
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
                        width: `${rate}%`,
                        backgroundColor: "green",
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default RatingsBar;
