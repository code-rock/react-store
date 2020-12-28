import React from 'react';
import { ReactReduxContext } from 'react-redux';
import FilterFormButton from '../components/FilterFormButton/FilterFormButton';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import FilterField from '../components/FilterField/FilterField';
import ProductList from '../components/ProductList/ProductList';
import RangeFilter from '../components/RangeFilter/RangeFilter';
import ContentColumn from '../components/ContentColumn/ContentColumn';
import DiscountFilter from '../components/DiscountFilter/DiscountFilter';
import products from '../../products';
import getProducts from '../utils/getProducts';
import getRange from '../utils/getRange';
import getCategory from '../utils/getCategory';

import {
    getTogglePropertyFromUrl,
    deleteAllPropertyFromUrl
} from '../utils/searchParamsUrl';

import store from '../store';
export const ProductPageContext = React.createContext(); 

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.prices = getRange(products);
        this.category = getCategory(products); 
        this.state = {
            productsWorthShowing: store.getState().productsWorthShowing
        };

        store.subscribe(() => {
            const { pricemin, pricemax, discount, activeCategory } = store.getState();
            this.setState({productsWorthShowing: getProducts(products, pricemin, pricemax, discount, activeCategory)});
        });
    }

    handleFormClear = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        this.setState({ productsWorthShowing: products });
        
        store.dispatch({ type: 'PRICEMIN_CHANGE', pricemin: this.prices.min });
        store.dispatch({ type: 'PRICEMAX_CHANGE', pricemax: this.prices.max });
        store.dispatch({ type: 'DISCOUNT_CHANGE', discount: 0 });
        store.dispatch({ type: 'ACTIVECATEGORY_CHANGE', activeCategory: [] });
        
        deleteAllPropertyFromUrl();
    }

    handleCategoryChange = ({ target: { value }}) => {
        store.dispatch({ type: 'ACTIVECATEGORY_CHANGE', activeCategory: getTogglePropertyFromUrl('category', value) });
    }

    render() {
        const { activeCategory } = store.getState();
        const { productsWorthShowing } = this.state;

        return <ReactReduxContext.Provider value={{ ...store }} >
                    <ContentColumn>
                        <form onSubmit={this.handleFormClear}>
                            <FilterField title="Цена"><RangeFilter /></FilterField>                       
                            <FilterField title="Скидка"><DiscountFilter /></FilterField>
                            <FilterField title="Категории">
                                {this.category.map(type => <CategoryButton onChange={this.handleCategoryChange} isActive={activeCategory.includes(type)} value={type} />)}
                            </FilterField>     
                            <FilterFormButton value="Сбросить фильтры" />       
                        </form>
                        <ProductList products={productsWorthShowing} />
                    </ContentColumn>          
                </ReactReduxContext.Provider>;
    }
};

export default ProductPage;