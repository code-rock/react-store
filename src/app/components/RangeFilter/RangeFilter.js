import React, { PureComponent } from 'react';
import './RangeFilter.css';
import InputNumberConnect from '../../containers/InputNumberConnect';

class RangeFilter extends PureComponent {
    render() {
        return <div className="range-filter">
                    <label className="filter__label start-label" htmlFor="pricemin">от</label>
                    <div className="start-input"><InputNumberConnect id="pricemin" /></div>
                    <label className="filter__label finish-label" htmlFor="pricemax">до</label>
                    <div className="finish-input"><InputNumberConnect id="pricemax" /></div>
               </div>
    }
}

export default RangeFilter;