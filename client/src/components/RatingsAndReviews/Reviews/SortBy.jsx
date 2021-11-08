/* eslint-disable react/prop-types */
import React, { useState } from 'react';


const SortBy = props => {
    const [sortList, setSortList] = getSortList("relevance")
    // TODO: check functionality
    function getSortList() {
        const [value, setState] = useState(null)
        const handleChange = e => { setState(e.target.value) }
        const inputProps = {
            onChange: handleChange
        }
        return [value, inputProps]
    }
    return (
        <div className="sort-dropdown">
            <label> {props.review.length} review(s), sorted by 
                <select {...setSortList}>
                    <option value={sortList === "relevance"}>Relevance</option>
                    <option value={sortList === "newest"}>Newest</option>
                    <option value={sortList === "helpful"}>Helpful</option>
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