import React from 'react';
import LogRender from '../containers/LogRender';

export default function withState(InputCompoment){
    return class extends LogRender {
        constructor(props) {
            super(props);

            this.state = {
                value: props.value
            }
        }

        handleChange = ({target: {id, value}}) => {
            this.setState({ value });
            this.props.onChangeInputDo(id, value);
        }

        // Запрещает ввод (-e)
        handleKeyDown = (event) => {
            if (event.keyCode === 69 || event.keyCode === 189) {
                event.preventDefault();
            } 
        }

        render() {
            const { value } = this.state;

            return <InputCompoment {...this.props}
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown} 
                                    value={value}
                                    min="0" />;
        }
  }
}