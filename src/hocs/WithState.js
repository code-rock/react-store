import React from 'react';
import LogRender from '../containers/LogRender';
import { ProductPageContext } from '../containers/ProductPage';

export default function withState(InputCompoment){
    return class extends LogRender {
        // Запрещает ввод (-e)
        handleKeyDown = (event) => {
            if (event.keyCode === 69 || event.keyCode === 189) {
                event.preventDefault();
            } 
        }

        render() {
            return  (
                <ProductPageContext.Consumer>
                    {(value) => {
                        return <InputCompoment {...this.props}
                                        onChange={value.onChange}
                                        onKeyDown={this.handleKeyDown} 
                                        value={value[this.props.id]}
                                        min="0" />
                    }}
                    
                </ProductPageContext.Consumer>
            );
        }
  }
}