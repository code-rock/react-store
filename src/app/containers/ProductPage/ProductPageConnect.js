import React from 'react';
import { connect } from 'react-redux';
import products from '../../../products';
import getCategory from '../../utils/getCategory';
import ProductPage from './ProductPage';
import getRange from '../../utils/getRange';
import {
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

    render() {
        const { activeCategory } = this.props;
        return <ProductPage onSubmit={this.handleFormClear}
                            category={this.category}
                            activeCategory={activeCategory} />
    }
};

const mapStateToProps = (state) => {
    return {
        pricemin: state.pricemin,
        pricemax: state.pricemax,
        discount: state.discount,
        activeCategory: state.activeCategory,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearForm: () => dispatch({ type: 'CLEAR_FORM' }),
    }
};

const ProductPageConnect = connect(mapStateToProps, mapDispatchToProps)(ProductPageWrapper)

export default ProductPageConnect;