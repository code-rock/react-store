import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pagination.css';
import { setUniquePropertyToUrl } from '../../utils/searchParamsUrl';
/// aria-current='page' -
export function WithNumberLink({ currPage, urlPage }) {
    const url = () => setUniquePropertyToUrl('pageNum', currPage);
    const isActive = () => urlPage === currPage;

    return  <NavLink to={url} 
                activeClassName='link_active'
                isActive={isActive}
                alt={`Page ${currPage}`}
                >
                {currPage}
            </NavLink>
}

export function WithTextLink({ urlPage, blockPage = 1, text = 'Назад' }) {
    const isActive = () => urlPage === blockPage;
    const url = () => setUniquePropertyToUrl('pageNum', blockPage === 1 ? urlPage - 1:  urlPage + 1);
    
    return <NavLink activeClassName='disabled'
                    isActive={isActive}
                    className='big-page'
                    alt={text}
                    to={url}
                 >
                {text}
            </NavLink>
}