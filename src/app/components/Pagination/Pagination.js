import React, { PureComponent } from 'react';
import { BrowserRouter, Link, Route, NavLink } from 'react-router-dom';
import './Pagination.css';
import {getUniquePropertyFromUrl, setUniquePropertyToUrl} from '../../utils/searchParamsUrl';
export default class PaginationWrapper extends PureComponent {
    constructor(props) {
        super(props);
        
    }
    isShort = max => Number(max) <= 5;
    isStart = active => Number(active) <= 3;
    isEnd = (active, max) => Number(active) >= Number(max) - 3;
    
    createLinks(start = 1, end = 1, active = 1) {
        let pageLinkEls = [];
        for (let i = start; i <= end; i++) {
            pageLinkEls.push(this.renderLinkWithPage(i, active));
        }
        return pageLinkEls;
    }
    
    createPaginationCenterPart = (active, max) => {
        let startPage = 1;
        let finishPage = 1;

        switch(true) {
            case this.isShort(max):
                startPage = 1;
                finishPage = max;
            break;
            case this.isStart(active):
                startPage = 1;
                finishPage = active + 2;
            break;
            case this.isEnd(active, max):
                startPage = active - 2;
                finishPage = max;
            break;
            default:
                startPage = active - 2;
                finishPage = active - 2;
        }

        return this.createLinks(startPage, finishPage, active); 
    }

    renderLinkWithPage = (page = 1, active = 1) => {
        return  <NavLink to={setUniquePropertyToUrl('pageNum', page)} 
                         activeClassName='link_active'
                         isActive={(match, location) => {
                            const searchParams = new URLSearchParams(location.search);
                            let urlPage = parseInt(searchParams.get('pageNum')) || 1;
                            return urlPage === page;
                          }}
                         alt={`Page ${page}`}>
                            {page}
                </NavLink>
    }

    renderLinkWithText = (page = 1, text, isDisabled) => {
        let urlPage = parseInt(getUniquePropertyFromUrl('pageNum')) || 1;
        return <NavLink activeClassName='disabled'
                        isActive={(match, location) => {
                            const searchParams = new URLSearchParams(location.search);
                            let urlPage = parseInt(searchParams.get('pageNum')) || 1;
                            return isDisabled;
                          }}
                        className='big-page'
                        alt={text}
                        to={setUniquePropertyToUrl('pageNum', page)}>
                        {text}
               </NavLink>
    }

    render() {
        const { maxPage, activePage } = this.props;
        let urlPage = parseInt(getUniquePropertyFromUrl('pageNum')) || 1;
        return <div className="pagination">
                   
                    {this.renderLinkWithText((urlPage - 1), 'Назад', urlPage === 1)}
                    {!this.isStart(urlPage) && !this.isShort(maxPage) ? 
                        <>
                             {this.renderLinkWithPage(1, urlPage)}
                            <span>...</span>
                        </> : ''}

                    {this.createPaginationCenterPart(urlPage, maxPage)}

                    {!this.isEnd(urlPage) && !this.isShort(maxPage) ? 
                        <>
                            <span>...</span>
                            {this.renderLinkWithPage(maxPage, urlPage)}
                        </> : ''}
                    {this.renderLinkWithText(urlPage + 1, 'Вперед', maxPage === urlPage)}
               
               </div>
    }
}