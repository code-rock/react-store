import React, { memo } from 'react';
import InputNumberConnect from '../../containers/InputNumberConnect';
import './styles.css';

function RangeFilter() {
    return <div className="range-filter">
                <label className="filter__label start-label" htmlFor="pricemin">от</label>
                <div className="start-input"><InputNumberConnect id="pricemin" /></div>
                <label className="filter__label finish-label" htmlFor="pricemax">до</label>
                <div className="finish-input"><InputNumberConnect id="pricemax" /></div>
            </div>
}

export default memo(RangeFilter);