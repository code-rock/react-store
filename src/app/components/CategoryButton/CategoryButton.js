import React, { PureComponent } from 'react';
import './CategoryButton.css';
import {getTogglePropertyFromUrl} from '../../utils/searchParamsUrl';

import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';
class CategoryButton extends PureComponent {
    render() {
        const { value, onChange, isActive } = this.props;
     
        return  <Link to={getTogglePropertyFromUrl('category', value)}>
                    <input type="checkbox"
                        value={value}
                        id={value}
                        name={value}
                        onChange={onChange}
                        checked={isActive}
                        className='category_checkbox' />
                    <label className='category_label' 
                           htmlFor={value}>{value}</label>
                </Link>        
    }
}

export default CategoryButton;