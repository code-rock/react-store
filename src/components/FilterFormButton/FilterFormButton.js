import React, { Children } from 'react';
import './FilterFormButton.css';
import LogRender from '../../containers/LogRender';

class FilterFormButton extends LogRender {
    render() {
        const { value, onSubmit } = this.props;

        return <input type='submit' onSubmit={onSubmit} value={value} className='filter-form-button' />
    }
}

export default FilterFormButton;