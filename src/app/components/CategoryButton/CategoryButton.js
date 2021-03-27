import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryButton.css';

class CategoryButton extends PureComponent {
    render() {
        const { value, isActive, goTo } = this.props;
        return  <NavLink to={goTo}
                         className='category'
                         activeClassName='checked'
                         isActive={() => isActive}
                >
                    {value}
               </NavLink>      
    }
}

export default CategoryButton;