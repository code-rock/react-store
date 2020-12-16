import React from 'react';
import './FilterInputError.css';
import LogRender from '../../containers/LogRender';

class FilterInputError extends LogRender{
    render() {
        return <span className={`error-field ${this.props.isShown ? 'error-show': ''}`} >
                    {this.props.children}
               </span>
    }
}

export default FilterInputError;