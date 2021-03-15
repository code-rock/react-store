import React, {PureComponent} from 'react';
import './FilterField.css';

class FilterField extends PureComponent {
    render() {
        const { title, children } = this.props;

        return  <fieldset className="filter-fieldset">
                    <legend className="filter-fieldset__title">{title}</legend>
                    {children}
                </fieldset>
    }
}

export default FilterField;