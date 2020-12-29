import React from 'react';
import { connect } from 'react-redux';
import products from '../../../products';
import getProducts from '../../utils/getProducts';
import getCategory from '../../utils/getCategory';
import ProductPage from './ProductPage';
import getRange from '../../utils/getRange';
import {
    getTogglePropertyFromUrl,
    deleteAllPropertyFromUrl
} from '../../utils/searchParamsUrl';

class ProductPageWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.prices = getRange(products);
        this.category = getCategory(products); 
    }

    handleFormClear = (event) => {
        event.preventDefault();
        event.stopPropagation();
        deleteAllPropertyFromUrl();
        this.props.clearForm();
    }

    handleCategoryChange = ({ target: { value }}) => {
        this.props.changeActiveCategory(getTogglePropertyFromUrl('category', value));
    }

    render() {
        const { activeCategory, productsWorthShowing } = this.props;

        return <ProductPage products={productsWorthShowing(products)}
                            onSubmit={this.handleFormClear}
                            category={this.category}
                            onChange={this.handleCategoryChange} 
                            activeCategory={activeCategory} />
    }
};

const mapStateToProps = (state) => {
    return {
        pricemin: state.pricemin,
        pricemax: state.pricemax,
        discount: state.discount,
        activeCategory: state.activeCategory,
        productsWorthShowing: (arr) => getProducts(arr, state.pricemin, state.pricemax, state.discount, state.activeCategory)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearForm: () => dispatch({ type: 'CLEAR_FORM' }),
        changePriceMin: (pricemin) => dispatch({ type: 'PRICEMIN_CHANGE', pricemin }),
        changePriceMax: (pricemax) => dispatch({ type: 'PRICEMAX_CHANGE', pricemax }),
        changeDiscount: (discount) => dispatch({ type: 'DISCOUNT_CHANGE', discount }),
        changeActiveCategory: (activeCategory) => dispatch({ type: 'ACTIVECATEGORY_CHANGE', activeCategory }),
        changeShowingProducts: (productsWorthShowing) => dispatch({ type: 'SHOWING_PRODUCTS_CHANGE', productsWorthShowing }),
    }
};

const ProductPageConnect = connect(mapStateToProps, mapDispatchToProps)(ProductPageWrapper)

export default ProductPageConnect;