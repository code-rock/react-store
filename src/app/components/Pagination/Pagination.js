import React from 'react';
import { connect } from 'react-redux';
import './Pagination.css';

export class PaginationWrapper extends React.PureComponent {
    isStart = (active) => {
        return active <= 4;
    }

    isEnd = (active, max) => {
        return active >= max - 4;
    }
    
    createLinks(start = 1, end = 1) {
        let pages = [];
        for (let i = start; i < end; i++) {
            pages.push(this.renderLink(i));
        }
        return pages;
    }
    
    createPagination = (active, max) => {
        return this.isStart(active)    ? this.createLinks(1, active + 1) 
            :( this.isEnd(active, max) ? this.createLinks(active - 1, max)
            :                            this.createLinks(active - 2, active + 1));
    }

    onLinkClick = (e) => {
        e.preventDefault();
        window.history.pushState({}, `Page ${e.target.href}`, e.target.href);
    }

    renderLink = (page) => {
        return <a onClick={this.onLinkClick}
                  href={`/?pageNum=${page}`} 
                  alt={`Page ${page}`}>
                      {page}
               </a>
    }

    render() {
        const { max = 10, active = 5 } = this.props;
        return <div className="pagination">
                    {!this.isStart(active) ? 
                        <React.Fragment>
                            {active !== 1 ? <a href='#'>Назад</a>: ''}
                            {this.renderLink(1)}
                            <a href='#'>...</a>
                        </React.Fragment> : ''}

                    {this.createPagination(active, max)}

                    {!this.isEnd(active) ? 
                        <React.Fragment>
                            <a href='#'>...</a>
                            {this.renderLink(max)}
                            {active !== max ? <a href='#'>Вперед</a>: ''}
                        </React.Fragment> : ''}
               </div>
    }
}
const mapStateToProps = (state) => {
   return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        priceminChange: (pricemin) => dispatch({ type: 'PRICEMIN_CHANGE', pricemin }),
          }
};

const PaginationConnect = connect(mapStateToProps, mapDispatchToProps)(PaginationWrapper)

export default PaginationConnect;