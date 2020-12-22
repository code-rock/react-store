import React from 'react';
import './DiscountFilter.css';
import LogRender from '../../containers/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import withState from '../../containers/WithState';

class DiscountFilter extends LogRender {
    render() {
        const {title} = this.props;
        const Input = withState(InputNumber);

        return <fieldset className="filter-sale">
                        <legend className="filter__title">{title}</legend>
                        <label className="filter__label" htmlFor="discount">от</label>
                        <div className="start-input"><Input id="discount" value="0" onChangeInputDo={this.props.getChangedValues}  /></div>
                        <span className="filter-sale__icon">%</span>
               </fieldset>
    }
}

export default DiscountFilter;