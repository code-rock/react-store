import React from 'react';
import './Pagination.css';
import UsePageNumber from '../../hocs/UsePageNumber';
import { WithNumberLink, WithTextLink } from './Link';

export default function PaginationWrapper({ max = 4 }) {
    const { page } = UsePageNumber();
    const centerPages = getPaginationCenterPages(page, max);

    return <div className="pagination">
                <WithTextLink urlPage={page} blockPage={1} text={'Назад'} />
                {!isStart(page) && !isShort(max) && 
                    <>
                        <WithNumberLink currPage={1} urlPage={page} />
                        <span>...</span>
                    </>
                }

                {centerPages.map(num => <WithNumberLink currPage={num} urlPage={page} />)}

                {!isEnd(page) && !isShort(max) && 
                    <>
                        <span>...</span>
                        <WithNumberLink currPage={max} urlPage={page} />
                    </> 
                }
                <WithTextLink urlPage={page} blockPage={max} text={'Вперед'} />  
           </div>
}

function isShort(max) {
    return max <= 5;
} 

function isStart(active) {
    return active <= 3;
}

function isEnd(active, max) {
    return active >= max - 3;
}

function getRangeOfValues(active, max) {
    switch(true) {
        case isShort(max):
            return [1, max];
        case isStart(active):
            return [1, active + 2];
        case isEnd(active, max):
            return [active - 2, max];
        default:
            return [active - 2, active + 2];
    }
}

function fillRangeOfValues(start, end) {
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range; 
}

function getPaginationCenterPages (activePage, maxPage) {
    const [ start, end ] = getRangeOfValues(activePage, maxPage);
    return fillRangeOfValues(start, end);
}
