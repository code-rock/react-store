import React from 'react';
import './InputNumber.css';
import LogRender from '../../containers/LogRender';
import withState from '../../hocs/WithState';

export class InputNumber extends LogRender {
    render() {
        const { value, onChange, onKeyDown, min, id} = this.props;

        return <input className="input"
                      id={id} 
                      min={min}
                      type="number" 
                      value={value} 
                      onChange={onChange}
                      onKeyDown={onKeyDown} />
    }
}

export const InputNumberWithState = withState(InputNumber);
