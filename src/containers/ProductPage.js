import React from 'react';

import FilterFormButton from '../components/FilterFormButton/FilterFormButton';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import FilterField from '../components/FilterField/FilterField';
import ProductList from '../components/ProductList/ProductList';
import RangeFilter from '../components/RangeFilter/RangeFilter';
import ContentColumn from '../components/ContentColumn/ContentColumn';
import DiscountFilter from '../components/DiscountFilter/DiscountFilter';
import products from '../products';
import getRange from '../utils/getRange';
import getCategory from '../utils/getCategory';
import { isPriceInRange, isDiscount, isInCategory } from '../utils/checks';
import {
    getUniquePropertyFromUrl,
    getMultiplePropertyFromUrl,
    setUniquePropertyToUrl,
    getTogglePropertyFromUrl,
    deleteAllPropertyFromUrl
} from '../utils/searchParamsUrl';

export const ProductPageContext = React.createContext({
    pricemin: 0, 
    pricemax: 50, 
    discount: 5,
    onChange: () => {}
}); 

class ProductPage extends React.Component {
    constructor(props) {
        super(props);

        this.prices = getRange(products);
        this.category = getCategory(products); 
        
        this.state = {
            pricemin: getUniquePropertyFromUrl('pricemin') || this.prices.min, 
            pricemax: getUniquePropertyFromUrl('pricemax') || this.prices.max,
            discount: getUniquePropertyFromUrl('discount') || 0,
            activeCategory: getMultiplePropertyFromUrl('category')
        }

        const currProducts = this.getProducts(this.state.pricemin, this.state.pricemax, this.state.discount, this.state.activeCategory);

        this.state.productsWorthShowing = currProducts.length ? currProducts : products;
    }

    componentDidUpdate(prevProps, prevState) {
        const { pricemin, pricemax, discount, activeCategory } = this.state;

        if (pricemin !== prevState.pricemin ||
            pricemax !== prevState.pricemax ||
            discount !== prevState.discount ||
            activeCategory !== prevState.activeCategory) {
                this.setState({ productsWorthShowing: this.getProducts(pricemin, pricemax, discount, activeCategory) });
            }
    }

    handleFilterForm = ({target: {id, value}}) => {
        this.setState({ [id]: value });
        setUniquePropertyToUrl([id], value);
    }

    handleFormClear = (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        this.setState({
            productsWorthShowing: products,
            pricemin: this.prices.min, 
            pricemax: this.prices.max,
            discount: 0,
            activeCategory: []
        });
        
        deleteAllPropertyFromUrl();
    }

    handleCategoryChange = ({ target: { value }}) => {
        this.setState({ activeCategory: getTogglePropertyFromUrl('category', value) });
    }

    getProducts = (pricemin, pricemax, discount, activeCategory) => {
        return products.filter(product => (
            isPriceInRange(Number(product.price), Number(pricemin), Number(pricemax)) &&
            isDiscount(Number(product.price), Number(product.subPriceContent),  Number(discount)) && 
            isInCategory(product.category, activeCategory)
        ));
    }

    render() {
        const { productsWorthShowing, activeCategory, pricemin, pricemax, discount } = this.state;
        
        return <ContentColumn>
                    <form onSubmit={this.handleFormClear}>
                        <ProductPageContext.Provider value={{ pricemin, pricemax, discount, onChange: this.handleFilterForm }} >
                            <FilterField title="Цена"><RangeFilter /></FilterField>                       
                            <FilterField title="Скидка"><DiscountFilter /></FilterField>
                         </ProductPageContext.Provider>
                        <FilterField title="Категории">
                           {this.category.map(type => <CategoryButton onChange={this.handleCategoryChange} isActive={activeCategory.includes(type)} value={type} />)}
                        </FilterField>     
                        <FilterFormButton value="Сбросить фильтры" />       
                    </form>
                    <ProductList products={productsWorthShowing} />
                </ContentColumn>;
    }
};

export default ProductPage;