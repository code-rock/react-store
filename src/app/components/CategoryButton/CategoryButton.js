import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryButton.css';
import { getTogglePropertyFromUrl, getMultiplePropertyFromUrl } from '../../utils/searchParamsUrl';

class CategoryButton extends PureComponent {
    render() {
        const { value, url, isActive } = this.props;
        return  <NavLink to={() => getTogglePropertyFromUrl('category', value)}
                         className='category'
                         activeClassName='checked'
                         isActive={(location) => getMultiplePropertyFromUrl('category', location.search).includes(value)}
                >
                    {value}
               </NavLink>      
    }
}

export default CategoryButton;