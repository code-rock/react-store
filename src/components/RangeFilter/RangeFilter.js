import React from 'react';
import './RangeFilter.css';
import LogRender from '../../containers/LogRender';
import { InputNumberWithState } from '../InputNumber/InputNumber';

class RangeFilter extends LogRender {
    render() {
        const { title, min, max, getChangedValues } = this.props;

        return <fieldset className="filter">
                    <legend className="filter__title">{title}</legend>
                    <label className="filter__label start-label" htmlFor="pricemin">от</label>
                    <div className="start-input">
                        <InputNumberWithState id="pricemin" value={min} onChangeInputDo={getChangedValues} />
                    </div>
                    <label className="filter__label finish-label" htmlFor="pricemax">до</label>
                    <div className="finish-input">
                        <InputNumberWithState id="pricemax" value={max} onChangeInputDo={getChangedValues} />
                    </div>
               </fieldset>
    }
}

export default RangeFilter;