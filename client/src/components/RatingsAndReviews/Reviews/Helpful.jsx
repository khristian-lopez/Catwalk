/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Helpful = ({helpfulness, reviewId}) => {
    const [helpful, setHelpful] = useState(helpfulness)
    const [notHelpful, setNotHelpful] = useState(0)
    const [click, setClick] = useState(false)
    
    // TODO: useEffect
    useEffect( () => {
        setHelpful(helpful)
    }, [helpful])

    useEffect( () => {
        setNotHelpful(notHelpful)
    }, [notHelpful])
    // TODO: finish up notHelpful 
    const updateHelpful = e => {
        e.preventDefault()
        
        if (!click) {
            if (e.target.value === "no") {
                setNotHelpful(notHelpful + 1)
                setClick(true)
            } else {
            return axios.put(`/reviews/${reviewId}/helpful`, { review_id: `${reviewId}`})
                .then(res => {
                    console.log(res.data)
                    setHelpful(helpful + 1)
                    setClick(true)
                })
                .catch(err => {
                    if (err.res) {
                        console.log(err.res.data)
                    }
                })
            }
        }
    }
    
    return (
        <div>
            <div id="review-helpful">Helpful?
                <a 
                    href="#" 
                    style={{margin: "2px", padding: "2px"}}  
                    value="yes" 
                    onClick={updateHelpful}
                >Yes
                </a>({helpful})
                <span> |</span>
                <a 
                    href="#" 
                    style={{margin: "2px", padding: "2px"}} 
                    value="no"  
                    onClick={updateHelpful}
                >No
                </a>({notHelpful})
            </div>
        </div>
    )
}

export default Helpful;

// const updateHelpful = e => {
//     e.preventDefault()
//     if (!click) {
//         return axios.put(`/reviews/${reviewId}/helpful`, { review_id: `${reviewId}`})
//             .then(res => {
//                 console.log(res.data)
//                 setHelpful(helpful + 1)
//                 setClick(true)
//             })
//             .catch(err => {
//                 if (err.res) console.log(err.response.data)
//             })
//     }
// }