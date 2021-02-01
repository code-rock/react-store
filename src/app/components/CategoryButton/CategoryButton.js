import React from 'react';
import './CategoryButton.css';
import LogRender from '../../containers/LogRender';

class CategoryButton extends LogRender{
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