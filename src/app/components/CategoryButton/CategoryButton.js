import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryButton.css';
import { getTogglePropertyFromUrl, getMultiplePropertyFromUrl } from '../../utils/searchParamsUrl';

class CategoryButton extends PureComponent {
    render() {
        const { value, isActive } = this.props;
        return  <NavLink to={() => {
                            const { search, values, url } = getTogglePropertyFromUrl('category', value);
                            url.searchParams.set('page', 1);
                            return { path: '/', search: url.search, state: { activeCategory: values, page: 1 }};
                        }}
                         className='category'
                         activeClassName='checked'
                         isActive={() => isActive}
                >
                    {value}
               </NavLink>      
    }
}

export default CategoryButton;