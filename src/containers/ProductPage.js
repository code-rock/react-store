import React from 'react';

import ProductList from '../components/ProductList/ProductList';
import RangeFilter from '../components/RangeFilter/RangeFilter';
import InputFilter from '../components/InputFilter/InputFilter';
import FilterTitle from '../components/FilterTitle/FilterTitle';
import FilterButton from '../components/FilterButton/FilterButton';
import FilterLabel from '../components/FilterLabel/FilterLabel';
import ContentColumn from '../components/ContentColumn/ContentColumn';
import FilterInputError from '../components/FilterInputError/FilterInputError';

import products from '../products';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productsWorthShowing: products,
            errorFieldFrom: false,
            errorFieldTo: false,
            errorMessage: '*Введите положительное число'
        }

        this.prices = this.getReasonablePrices(products);

        this.inputFromPrice = React.createRef();
        this.inputToPrice = React.createRef();

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.checkInput = this.checkInput.bind(this);
    }

    getReasonablePrices(products = []) {
        if (!Array.isArray(products) && !products.length) return [0,0];
        let min = products[0].price;
        let max = products[0].price;
        products.forEach(product => {
            if (product.price > max)  max = product.price;
            if (product.price < min)  min = product.price;
        })
        return {min, max};
    }

    handleButtonClick(e) {
        const from = Number(this.inputFromPrice.current.input.current.value);
        const to = Number(this.inputToPrice.current.input.current.value);
        const shouldShow = products.filter(product => ((product.price >= from) && (product.price <= to)));
        this.setState({ productsWorthShowing: shouldShow });
    }

    // Запрещает ввод символов через клавиатуру(-e)
    handleNegativeValues(e) {
        if (e.keyCode === 69 || e.keyCode === 189) e.preventDefault();
    }

    checkInput() {
        const from = Number(this.inputFromPrice.current.input.current.value);
        const to = Number(this.inputToPrice.current.input.current.value);
        
        if (from > to) {
            this.setState({ errorFieldFrom: true });
            this.setState({ errorMessage: '*Стартовавя цена привысила придельную'});
        } else if (from < 0) {
            this.setState({ errorFieldFrom: true });
            this.setState({ errorMessage: '*Введите положительное число'});
        } else if (to < 0) {
            this.setState({ errorFieldTo: true });
            this.setState({ errorMessage: '*Введите положительное число'});
        } else {
            this.setState({ errorFieldTo: false });
            this.setState({ errorFieldFrom: false });
        }
    }

    render() {
        const {productsWorthShowing, errorFieldFrom, errorFieldTo, errorMessage} = this.state;

        return <ContentColumn>
                <RangeFilter 
                    title={<FilterTitle name="Цена" />}
                    slabel={<FilterLabel id="filter-from">
                                от
                            </FilterLabel>}
                    sinput={<InputFilter ref={this.inputFromPrice} 
                                         isFailed={errorFieldFrom}
                                         handleKeyDown={this.handleNegativeValues} 
                                         handleChange={this.checkInput}
                                         id="filter-from" 
                                         type="number"   
                                         value={this.prices.min}
                            ></InputFilter>}
                    flabel={<FilterLabel id="filter-to">
                                до
                            </FilterLabel>}
                    finput={<InputFilter ref={this.inputToPrice} 
                                         isFailed={errorFieldTo}
                                         handleKeyDown={this.handleNegativeValues}
                                         handleChange={this.checkInput}  
                                         id="filter-to" 
                                         type="number" 
                                         value={this.prices.max}
                            ></InputFilter>}
                    btn={<FilterButton 
                            handleClick={this.handleButtonClick} 
                            isBlocked={errorFieldFrom || errorFieldTo}>
                                Применить
                         </FilterButton>}
                    error={<FilterInputError 
                                isShown={errorFieldFrom || errorFieldTo}>
                              {errorMessage}
                           </FilterInputError>}
                />
                <ProductList products={productsWorthShowing} />
            </ContentColumn>;
    }
};

export default ProductPage;