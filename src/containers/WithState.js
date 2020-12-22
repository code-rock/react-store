import React from 'react';
import LogRender from './LogRender';

export default function withState(HoccedComponent){
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
            const { id } = this.props;

            return <HoccedComponent onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown} 
                                    value={value}
                                    id={id}
                                    min="0"
                                    {...this.props} />;
        }
  }
}