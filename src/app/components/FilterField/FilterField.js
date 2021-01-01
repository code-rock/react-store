import React from 'react';
import './FilterField.css';
import LogRender from '../../containers/LogRender';

class FilterField extends LogRender {
    render() {
        const { title, children } = this.props;

        return  <fieldset className="filter-fieldset">
                    <legend className="filter-fieldset__title">{title}</legend>
                    {children}
                </fieldset>
    }
}

export default FilterField;