import React from 'react';

import ProductList from '../components/ProductList/ProductList';
import RangeFilter from '../components/RangeFilter/RangeFilter';
import ContentColumn from '../components/ContentColumn/ContentColumn';
import DiscountFilter from '../components/DiscountFilter/DiscountFilter';
import products from '../products';
import getRange from '../utils/getRange';

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
    
    isPriceInRange = (price, min, max) => {
        return price >= Number(min) && price <= Number(max);
    }

    isDiscount = (withSale, beforeSale, discount) => {
        return beforeSale ? ((beforeSale - withSale) / beforeSale * 100) >= discount : true;
    }

    checkPriceFilter = (id, value) => {
        const { pricemin, pricemax, discount } = {...this.state, [id]: value};
        const shouldShow = products.filter(product => {
            return this.isPriceInRange(Number(product.price), pricemin, pricemax) &&
                   this.isDiscount(Number(product.price), Number(product.subPriceContent), discount);
        });

        this.setState({ 
            [id]: value,
            productsWorthShowing: shouldShow 
        });
    }

    render() {
        const { productsWorthShowing } = this.state;
        
        return <ContentColumn>
                    <form>
                        <RangeFilter title='Цена'
                                     min={this.prices.min}
                                     max={this.prices.max}
                                     getChangedValues={this.checkPriceFilter} />
                        <DiscountFilter title='Скидка'
                                        getChangedValues={this.checkPriceFilter} />
                    </form>
                    <ProductList products={productsWorthShowing} />
                </ContentColumn>;
    }
};

export default ProductPage;