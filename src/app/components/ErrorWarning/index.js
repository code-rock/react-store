import React, { memo } from 'react';
import Lamp from '../../icons/Lamp';
import './styles.css';

function ErrorWarning({ text }) {
    return <div className="error">
        {text ? <span className="error__text">{text}</span> : ''}
        <Lamp />
    </div>
}

export default memo(ErrorWarning);