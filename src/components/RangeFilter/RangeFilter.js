import React from 'react';
import './RangeFilter.css';
import LogRender from '../../containers/LogRender';
import { InputNumberWithState } from '../InputNumber/InputNumber';

class RangeFilter extends LogRender {
    render() {
        return <div className="range-filter">
                    <label className="filter__label start-label" htmlFor="pricemin">от</label>
                    <div className="start-input"><InputNumberWithState id="pricemin" /></div>
                    <label className="filter__label finish-label" htmlFor="pricemax">до</label>
                    <div className="finish-input"><InputNumberWithState id="pricemax" /></div>
               </div>
    }
}

export default RangeFilter;