import React, { memo } from 'react';
import SkeletonProductCardSmall from '../SkeletonProductCardSmall';
import './styles.css';

function SkeletonProductsList() {
    return <div class="list-skeleton">
        {[...Array(6)].map((el, id) => <SkeletonProductCardSmall key={id} />)}
    </div>
}

export default memo(SkeletonProductsList);