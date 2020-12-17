import React from 'react';

import ProductList from '../components/ProductList/ProductList';
import RangeFilter from '../components/RangeFilter/RangeFilter';
import ContentColumn from '../components/ContentColumn/ContentColumn';

import products from '../products';

const errorText = [
    '*Введите положительное число',
    '*Стартовавя цена привысила придельную'
];

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productsWorthShowing: products,
            errorFrom: false,
            errorTo: false,
            errorType: errorText[0]
        }

        this.prices = this.getReasonablePrices(products);
        this.priceFilter = React.createRef();
    }

    getReasonablePrices(products = []) {
        if (!Array.isArray(products) && !products.length) {
            return [0,0];
        }

        let min = products[0].price;
        let max = products[0].price;
        products.forEach(product => {
            if (product.price > max)  max = product.price;
            if (product.price < min)  min = product.price;
        })
        return {min, max};
    }

    applyFilterPrice = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const from = Number(this.priceFilter.current.inputFrom.current.value);
        const to = Number(this.priceFilter.current.inputTo.current.value);
        const shouldShow = products.filter(product => ((product.price >= from) && (product.price <= to)));
        this.setState({ productsWorthShowing: shouldShow });
    }

    checkPriceFilter = () => {
        const from = Number(this.priceFilter.current.inputFrom.current.value);
        const to = Number(this.priceFilter.current.inputTo.current.value);
        
        if (from > to) {
            this.setState({ errorFrom: true, errorType: errorText[1]});
        } else if (from < 0) {
            this.setState({ errorFrom: true, errorType: errorText[0]}); 
        } else if (to < 0) {
            this.setState({ errorTo: true,  errorType: errorText[0]});
        } else {
            this.setState({ errorTo: false, errorFrom: false });
        }
    }

    render() {
        const {productsWorthShowing, errorType, errorFrom, errorTo} = this.state;

        return <ContentColumn>
                <RangeFilter ref={this.priceFilter}
                             title={'Цена'}
                             errortype={errorType}
                             errorfrom={errorFrom}
                             errorto={errorTo}
                             min={this.prices.min}
                             max={this.prices.max}
                             handleChange={this.checkPriceFilter}  
                             handleClick={this.applyFilterPrice}/>
                <ProductList products={productsWorthShowing} />
            </ContentColumn>;
    }
};

export default ProductPage;