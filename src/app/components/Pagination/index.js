import React from 'react';
import './Pagination.css';
import UsePageNumber from '../../hocs/UsePageNumber';
import { NumberLink, TextLink } from './Link';
import range from '../../utils/range';
import { isShort, isStart, isEnd } from '../../utils/checks';

export default function PaginationWrapper({ max = 4 }) {
    const { page } = UsePageNumber();
    const centerPages = getPaginationCenterPages(page, max);

    return <div className="pagination">
                <TextLink urlPage={page} blockPage={1} text={'Назад'} />
                {!isStart(page) && !isShort(max) && 
                    <>
                        <NumberLink currPage={1} urlPage={page} />
                        <span>...</span>
                    </>
                }

                {centerPages.map(num => <NumberLink currPage={num} urlPage={page} />)}

                {!isEnd(page) && !isShort(max) && 
                    <>
                        <span>...</span>
                        <NumberLink currPage={max} urlPage={page} />
                    </> 
                }
                <TextLink urlPage={page} blockPage={max} text={'Вперед'} />  
           </div>
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

function getPaginationCenterPages (activePage, maxPage) {
    const [ start, end ] = getRangeOfValues(activePage, maxPage);
    return range(start, end);
}
