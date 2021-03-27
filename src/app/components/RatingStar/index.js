import React, { memo } from 'react';
import EmptyStar from '../../icons/EmptyStar';
import FilledStar from '../../icons/FilledStar';
import './styles.css';

function RatingStar({ isFilled }) {
    return  <div className="star">
                {isFilled ? <FilledStar /> : <EmptyStar />}
            </div>
};

export default memo(RatingStar);