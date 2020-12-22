import React from 'react';
import './DiscountFilter.css';
import LogRender from '../../containers/LogRender';
import { InputNumberWithState } from '../InputNumber/InputNumber';

class DiscountFilter extends LogRender {
    render() {
        const {title} = this.props;;

        return <fieldset className="filter-sale">
                        <legend className="filter__title">{title}</legend>
                        <label className="filter__label" htmlFor="discount">от</label>
                        <div className="start-input">
                            <InputNumberWithState id="discount" value="0" onChangeInputDo={this.props.getChangedValues} />
                        </div>
                        <span className="filter-sale__icon">%</span>
               </fieldset>
    }
}

export default DiscountFilter;