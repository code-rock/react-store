import React from 'react';
import './Pagination.css';
import { setUniquePropertyToUrl } from '../../utils/searchParamsUrl';

export default class PaginationWrapper extends React.PureComponent {
    isShort = max => Number(max) <= 5;
    isStart = active => Number(active) <= 3;
    isEnd = (active, max) => Number(active) >= Number(max) - 3;
    
    createLinks(start = 1, end = 1, active = 1) {
        let pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(this.renderLink(i, active));
        }
        return pages;
    }
    
    createPagination = (active, max) => {
        return this.isShort(max)       ? this.createLinks(1, max, active) 
            :( this.isStart(active)    ? this.createLinks(1, active + 2, active) 
            :( this.isEnd(active, max) ? this.createLinks(active - 2, max, active)
            :                            this.createLinks(active - 2, active + 2, active)
        ))   
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
                        <React.Fragment>
                             {this.renderLink(1, activePage)}
                            <span>...</span>
                        </React.Fragment> : ''}

                    {this.createPagination(activePage, maxPage)}

                    {!this.isEnd(activePage) && !this.isShort(maxPage) ? 
                        <React.Fragment>
                            <span>...</span>
                            {this.renderLink(maxPage, activePage)}
                        </React.Fragment> : ''}
                    {activePage !== maxPage ? this.renderLink(activePage + 1, activePage, 'Вперед'): ''}
               </div>
    }
}