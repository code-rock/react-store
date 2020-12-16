import React from 'react';

import './ProductPrice.css';

function disaggregation(str = '', n = 3) {
     let firstNumRank = str.length % n;
     return [str.substring(0, firstNumRank), ...str.substring(firstNumRank).match(/.{1,3}/g)];
}

function ProductPrice(price, curr, size = 'm') {
    if (price) {
    const discharges = disaggregation(price);
    return <div className={'price ' + size}>
              {discharges.map(item => <span className="price-part">{item}</span>)}
              {curr}
           </div>
    }
}

export default ProductPrice;