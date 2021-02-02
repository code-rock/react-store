import React, { PureComponent } from 'react';
import './FilterFormButton.css'; 

class FilterFormButton extends PureComponent {
    render() {
        const { value, onSubmit } = this.props;

        return <input type='submit' onSubmit={onSubmit} value={value} className='filter-form-button' />
    }
}

export default FilterFormButton;