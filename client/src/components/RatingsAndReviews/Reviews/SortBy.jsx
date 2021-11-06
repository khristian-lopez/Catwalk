import React from 'react';
import PropTypes from 'prop-types';

const SortBy = props => {
    
    return (
        <div className="sort-dropdown">
            <label> {props.review} review(s), sorted by 
                <select >
                    <option name="relevance">Relevance</option>
                    <option name="newest">Newest</option>
                    <option name="helpful">Helpful</option>
                </select>
            </label>
        </div>
    )
}

SortBy.propTypes = {
    review: PropTypes.number
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