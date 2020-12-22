import React from 'react';
import './RangeFilter.css';
import LogRender from '../../containers/LogRender';
import InputNumber from '../InputNumber/InputNumber';
import withState from '../../containers/WithState';

class RangeFilter extends LogRender {
    render() {
        const Input = withState(InputNumber); 

        return <fieldset className="filter">
                    <legend className="filter__title">{this.props.title}</legend>
                    <label className="filter__label start-label" htmlFor="pricemin">от</label>
                    <div className="start-input">
                        <Input id="pricemin" value={this.props.min} 
                                             onChangeInputDo={this.props.getChangedValues} />
                    </div>
                    <label className="filter__label finish-label" htmlFor="pricemax">до</label>
                    <div className="finish-input">
                        <Input id="pricemax" value={this.props.max} 
                                             onChangeInputDo={this.props.getChangedValues} />
                    </div>
               </fieldset>
    }
}

export default RangeFilter;