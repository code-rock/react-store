import React from 'react';

import ProductList from '../components/ProductList/ProductList';
import RangeFilter from '../components/RangeFilter/RangeFilter';
import ContentColumn from '../components/ContentColumn/ContentColumn';
import DiscountFilter from '../components/DiscountFilter/DiscountFilter';
import products from '../products';
import getRange from '../utils/getRange';
import { isPriceInRange, isDiscount } from '../utils/checks';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.prices = getRange(products);

        this.state = {
            productsWorthShowing: products,
            pricemin: this.prices.min, 
            pricemax: this.prices.max,
            discount: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { pricemin, pricemax, discount } = this.state;

        if (pricemin !== prevState.pricemin ||
            pricemax !== prevState.pricemax ||
            discount !== prevState.discount) {
                this.setState({ productsWorthShowing: this.getProducts(pricemin, pricemax, discount)});
        }
    }

    handleFilterForm = (id, value) => {
        this.setState({ [id]: value });
    }

    getProducts = (pricemin, pricemax, discount) => {
        return products.filter(product => (
            isPriceInRange(Number(product.price), Number(pricemin), Number(pricemax)) &&
            isDiscount(Number(product.price), Number(product.subPriceContent),  Number(discount))
        ));
    }

    render() {
        const { productsWorthShowing } = this.state;
        
        return <ContentColumn>
                    <form>
                        <RangeFilter title='Цена'
                                     min={this.prices.min}
                                     max={this.prices.max}
                                     getChangedValues={this.handleFilterForm} />

                        <DiscountFilter title='Скидка'
                                        getChangedValues={this.handleFilterForm} />
                    </form>
                    <ProductList products={productsWorthShowing} />
                </ContentColumn>;
    }
};

export default ProductPage;