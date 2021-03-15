import React, { PureComponent } from 'react';

import './ProductPrice.css';
import disaggregation from '../../utils/disaggregation';

class ProductPrice extends PureComponent {
    render() {
        if (this.props.price) {
            const discharges = disaggregation(this.props.price);
            return <div className={`price ${this.props.size}`}>
                       {discharges.map(item => (<span className="price-part">{item}</span>))}
                       {this.props.curr}
                   </div>;
        } else {
            return <div></div>
        }
    }
}

export default ProductPrice;