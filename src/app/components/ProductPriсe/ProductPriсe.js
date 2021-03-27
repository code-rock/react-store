import React, { PureComponent } from 'react';
import './ProductPrice.css';

class ProductPrice extends PureComponent {
    render() {
        return <div className={`price ${this.props.size}`}>
                    {this.props.price ? <span className="price-part">{this.props.price}</span>: ''}
                    {this.props.curr}
               </div>
    }
}

export default ProductPrice;