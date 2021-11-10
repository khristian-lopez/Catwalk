/* eslint-disable react/prop-types */
import React, { useState } from 'react';


const SortBy = props => {
    
    // TODO: check functionality
    
    console.log(props)
    return (
        <div className="sort-dropdown">
            <label> {props.review.length} review(s), sorted by 
                <select >
                    <option >Relevance</option>
                    <option >Newest</option>
                    <option >Helpful</option>
                </select>
            </label>
        </div>
    )
}


export default SortBy;


// class SortBy extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             value: "",
//             reviews: data.results
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(e) {
//         [this.setState({ value: e.target.value })]
//     }
//     // TODO: implement sortBy function to sort review based on option chosen (newest,)
//     render() {
        
//         return (
//             <div className="sort-dropdown">
//                 <label>{this.state.reviews.length} reviews, sorted by 
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option name="relevance">Relevance</option>
//                         <option name="newest">Newest</option>
//                         <option name="helpful">Helpful</option>
//                     </select>
//                 </label>
//             </div>
//         )
//     }
// }