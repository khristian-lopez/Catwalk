import React from 'react';

const SortBy = () => {
    return (
        <div className="sort-dropdown">
            <label>Sort by:
                <select>
                    <option value="relevance">Relevance</option>
                    <option value="newest">Newest</option>
                    <option value="helpful">Helpful</option>
                </select>
            </label>
        </div>
    )
}

export default SortBy;