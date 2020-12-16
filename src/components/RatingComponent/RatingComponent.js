import React from 'react';

import EmptyStar from '../../icons/EmptyStar';
import FilledStar from '../../icons/FilledStar';
import LogRender from '../../containers/LogRender';
import './RatingComponent.css';

class RatingComponent extends LogRender {
    render() {
        return <div className="star">{this.props.isFilled ? <FilledStar /> : <EmptyStar />}</div>
    }
};

export default RatingComponent;