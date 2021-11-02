import React from 'react';

class SortBy extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
    }
    render() {
        return (
            <div className="sort-dropdown">
                <label>sorted by
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="relevance">Relevance</option>
                        <option value="newest">Newest</option>
                        <option value="helpful">Helpful</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default SortBy;