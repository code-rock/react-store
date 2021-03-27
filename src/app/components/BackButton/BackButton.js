import React, { memo } from 'react';
import BackArrow from '../../icons/BackArrow';
import './BackButton.css';
import { withRouter } from 'react-router-dom';

function BackButton({ history, text = 'Товар не найден', handleClick = () => history.goBack() }) {
    return <div className="back-button__text" onClick={handleClick}>
                <div className="back-button__icon"><BackArrow /></div>
                <div>{text}</div>
            </div>
}

export default memo(withRouter(BackButton));