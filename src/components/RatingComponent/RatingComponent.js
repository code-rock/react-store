import React from 'react';

import EmptyStar from '../../icons/EmptyStar';
import FilledStar from '../../icons/FilledStar';

import './RatingComponent.css';

function RatingComponent({ isFilled }) {
    return  <div className="star">{isFilled ? <FilledStar /> : <EmptyStar />}</div>
};

export default RatingComponent;