import React from 'react';
import { NavLink } from 'react-router-dom';
import './Pagination.css';
import { setUniquePropertyToUrl } from '../../utils/searchParamsUrl';
/// aria-current='page' -
export function NumberLink({ currPage, urlPage }) {
    const url = () => setUniquePropertyToUrl('page', currPage);
    const isActive = () => urlPage === currPage;
console.log( url(),'url_________________');
    return  <NavLink to={{path: '/', search: url(), state: { page: currPage }}} 
                activeClassName='link_active'
                isActive={isActive}
                alt={`Page ${currPage}`}
                >
                {currPage}
            </NavLink>
}

export function TextLink({ urlPage, blockPage = 1, text = 'Назад' }) {
    const isActive = () => urlPage === blockPage;
    const page =  blockPage === 1 ? urlPage - 1:  urlPage + 1;
    const url = () => setUniquePropertyToUrl('page', page);

    return <NavLink activeClassName='disabled'
                    isActive={isActive}
                    className='big-page'
                    alt={text}
                    to={{path: '/', search: url(), state: { page: page }}}
                 >
                {text}
            </NavLink>
}