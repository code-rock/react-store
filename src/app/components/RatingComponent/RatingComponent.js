import React from 'react';

import EmptyStar from '../../icons/EmptyStar';
import FilledStar from '../../icons/FilledStar';
import LogRender from '../../containers/LogRender';
import './RatingComponent.css';

class RatingComponent extends LogRender {
    render() {
        const { isFilled } = this.props;

        return  <div className="star">
                    {isFilled ? <FilledStar /> : <EmptyStar />}
                </div>
    }
};

export default RatingComponent;