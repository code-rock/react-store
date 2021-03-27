import React, { memo } from 'react';
import './styles.css';

function SkeletonProductCardSmall () {
    return <div class="card-skeleton">
        <div class="card-skeleton__image"></div>
        <div class="card-skeleton__title"></div>
        <div class="card-skeleton__price"></div>        
        <div class="card-skeleton__rating"></div>
    </div>
}

export default memo(SkeletonProductCardSmall);