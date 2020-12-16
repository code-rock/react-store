import React from 'react';
import './FilterButton.css';
import LogRender from '../../containers/LogRender';

class FilterButton extends LogRender{
    render() {
        return <button onClick={this.props.handleClick} 
                       disabled={this.props.isBlocked}
                       className="filter-button">
                            {this.props.children}
               </button>
    }
}

export default FilterButton;