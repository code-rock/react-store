import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './FilterFormButton.css'; 

class FilterFormButton extends PureComponent {
    render() {
        return  <Link to="/" className='filter-form-button'>    
                    {this.props.value}
                </Link>
    }
}

export default FilterFormButton;