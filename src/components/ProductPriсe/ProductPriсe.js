import React from 'react';

import './ProductPrice.css';
import LogRender from '../../containers/LogRender';

function disaggregation(str = '', n = 3) {
     let firstNumRank = str.length % n;
     return [str.substring(0, firstNumRank), ...str.substring(firstNumRank).match(/.{1,3}/g)];
}

class ProductPrice extends LogRender {
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