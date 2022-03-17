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
                    height: "15",
                    width: "90%",
                    backgroundColor: "rgb(220,220,220)",
                }}
            >
                <div
                    className="ratingsbar-green"
                    style={{
                        padding: "3px",
                        height: "100%",
                        width: `${rate}%`,
                        backgroundColor: "black",
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default RatingsBar;
