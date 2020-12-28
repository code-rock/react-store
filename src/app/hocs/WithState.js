import React from 'react';
import { ReactReduxContext } from 'react-redux';
import LogRender from '../containers/LogRender';
import {
    setUniquePropertyToUrl
} from '../utils/searchParamsUrl';

export default function withState(InputCompoment) {
    return class extends LogRender {
        // Запрещает ввод (-e)
        handleKeyDown = (event) => {
            if (event.keyCode === 69 || event.keyCode === 189) {
                event.preventDefault();
            } 
        }

        onChange = (e, dispatch) => {
            dispatch({
                type: `${this.props.id.toUpperCase()}_CHANGE`,
                [this.props.id]: e.target.value
            })
            setUniquePropertyToUrl(this.props.id, e.target.value);
        }

        render() {
            return  (
                <ReactReduxContext.Consumer>
                    {(store) => {
                        return <InputCompoment {...this.props}
                                        onChange={(e) => this.onChange(e, store.dispatch)}
                                        onKeyDown={this.handleKeyDown} 
                                        value={store.getState()[this.props.id]}
                                        min="0" />
                    }}
                    
                </ReactReduxContext.Consumer>
            );
        }
  }
}