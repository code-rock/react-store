import React from 'react';

import './InputFilter.css';
import LogRender from '../../containers/LogRender';

class InputFilter extends LogRender {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }

    render() {
         return <input ref={this.input}
                       isfailed={this.props.isFailed}
                       onKeyDown={this.props.handleKeyDown}
                       onChange={this.props.handleChange} 
                       type={this.props.type}  
                       id={this.props.id} 
                       name={this.props.name}  
                       className={`filter-input ${this.props.isFailed ? 'input-error': ''}`}
                       placeholder={this.props.placeholder} 
                       defaultValue={this.props.value}
                />;
    }
}

export default InputFilter;