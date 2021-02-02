import React, { PureComponent } from 'react';
import './CategoryButton.css';

class CategoryButton extends PureComponent {
    render() {
        const { value, onChange, isActive } = this.props;
     
        return  <>
                    <input type="checkbox"
                        value={value}
                        id={value}
                        name={value}
                        onChange={onChange}
                        checked={isActive}
                        className='category_checkbox' />
                    <label className='category_label' 
                           htmlFor={value}>{value}</label>
                </>        
    }
}

export default CategoryButton;