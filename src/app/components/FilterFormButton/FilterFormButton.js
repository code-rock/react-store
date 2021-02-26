import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './FilterFormButton.css'; 

class FilterFormButton extends PureComponent {
    render() {
        const { value } = this.props;
        return  <Link to="/">    
                    <input type='submit' value={value} className='filter-form-button' />
                </Link>
    }
}

export default FilterFormButton;