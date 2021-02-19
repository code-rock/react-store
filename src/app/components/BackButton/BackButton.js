import React, { PureComponent } from 'react';
import BackArrow from '../../icons/BackArrow';
import './BackButton.css';

class BackButton extends PureComponent {
    render() {
        return <div className="back-button__text">
                    <div className="back-button__icon"><BackArrow /></div>
                    <div>Товар не найден</div>
               </div>
    }
}

export default BackButton;