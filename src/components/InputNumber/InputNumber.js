import React from 'react';
import './InputNumber.css';
import LogRender from '../../containers/LogRender';

class InputNumber extends LogRender {
    render() {
        const { value, onChange, onKeyDown, min, id} = this.props;

        return <input className="filter__input"
                      id={id} 
                      min={min}
                      type="number" 
                      value={value} 
                      onChange={onChange}
                      onKeyDown={onKeyDown} />
    }
}

export default InputNumber;