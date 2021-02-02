import React, { PureComponent } from 'react';
import './Pagination.css';
import { setUniquePropertyToUrl } from '../../utils/searchParamsUrl';

export default class PaginationWrapper extends PureComponent {
    isShort = max => Number(max) <= 5;
    isStart = active => Number(active) <= 3;
    isEnd = (active, max) => Number(active) >= Number(max) - 3;
    
    createLinks(start = 1, end = 1, active = 1) {
        let pageLinkEls = [];
        for (let i = start; i <= end; i++) {
            pageLinkEls.push(this.renderLink(i, active));
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

    onLinkClick = (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        setUniquePropertyToUrl('pageNum', page,  `Page ${page}`);
        this.props.changeActivePage(page);
    }

    renderLink = (page = 1, active = 1, text) => {
        return <a onClick={this.onLinkClick}
                  className={`${active === page ? 'link_active' : ''} ${text ? 'big-page': ''}`}
                  href={`/?pageNum=${page}`} 
                  alt={`Page ${page}`}
                  data-page={page}>
                      {text || page}
               </a>
    }

    render() {
        const { maxPage, activePage } = this.props;
        return <div className="pagination">
                    {activePage !== 1 ? this.renderLink((activePage - 1), activePage, 'Назад'): ''}
                    {!this.isStart(activePage) && !this.isShort(maxPage) ? 
                        <>
                             {this.renderLink(1, activePage)}
                            <span>...</span>
                        </> : ''}

                    {this.createPaginationCenterPart(activePage, maxPage)}

                    {!this.isEnd(activePage) && !this.isShort(maxPage) ? 
                        <>
                            <span>...</span>
                            {this.renderLink(maxPage, activePage)}
                        </> : ''}
                    {activePage !== maxPage ? this.renderLink(activePage + 1, activePage, 'Вперед'): ''}
               </div>
    }
}