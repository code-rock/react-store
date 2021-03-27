import React, { PureComponent } from 'react';
import './ProductPrice.css';
import disaggregation from '../../utils/disaggregation';

class ProductPrice extends PureComponent {
    render() {
        const { size, price, curr } = this.props;
        return <div className={`price ${size}`}>
                    {price ? disaggregation(price.toString()).map(item => <span className="price-part">{item}</span>) : ''}
                    {curr}
               </div>
    }
}

export default ProductPrice;