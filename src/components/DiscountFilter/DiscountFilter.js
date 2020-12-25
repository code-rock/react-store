import React from 'react';
import './DiscountFilter.css';
import LogRender from '../../containers/LogRender';
import { InputNumberWithState } from '../InputNumber/InputNumber';

class DiscountFilter extends LogRender {
    render() {
        return <div className="filter-sale">
                    <label className="filter-sale__label" htmlFor="discount">от</label>
                    <div className="filter-sale__input"><InputNumberWithState id="discount" /></div>
                    <span className="filter-sale__icon">%</span>
               </div>
    }
}

export default DiscountFilter;