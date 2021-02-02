import React, { PureComponent } from 'react';
import EmptyStar from '../../icons/EmptyStar';
import FilledStar from '../../icons/FilledStar';
import './RatingComponent.css';

class RatingComponent extends PureComponent {
    render() {
        const { isFilled } = this.props;

        return  <div className="star">
                    {isFilled ? <FilledStar /> : <EmptyStar />}
                </div>
    }
};

export default RatingComponent;