import React from 'react';
import LogRender from '../containers/LogRender';

export default function withState(InputCompoment) {
    return class extends LogRender {
        // Запрещает ввод (-e)
        handleKeyDown = (event) => {
            if (event.keyCode === 69 || event.keyCode === 189) {
                event.preventDefault();
            } 
        }

        render() {
            return <InputCompoment {...this.props}
                                   onKeyDown={this.handleKeyDown} 
                                   min="0" />
        }
  }
}
