import React from 'react';
import './FilterTitle.css';
import LogRender from '../../containers/LogRender';

class FilterTitle extends LogRender {
    render() {
        return <p className="filter-title">
                    {this.props.name}
               </p>
    }
}

export default FilterTitle;