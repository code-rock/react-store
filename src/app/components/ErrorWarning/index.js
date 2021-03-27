import React, { memo } from 'react';
import Lamp from '../../icons/Lamp';
import './styles.css';

function ErrorWarning({ text }) {
    return  <div className="error">
                {text ? <div className="error__text">{text}</div> : ''}
                <Lamp />
            </div>
}

export default memo(ErrorWarning);