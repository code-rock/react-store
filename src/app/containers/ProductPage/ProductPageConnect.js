import React from 'react';
import { connect } from 'react-redux';
import products from '../../../products';
import getCategory from '../../utils/getCategory';
import ProductPageWrapper from './ProductPage';
import { deleteAllPropertyFromUrl } from '../../utils/searchParamsUrl';
import { clearForm } from '../../store/actions';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
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
        return <ProductPageWrapper onSubmit={this.handleFormClear}
                                   category={this.category}
                                   activeCategory={activeCategory} />
    }
};

const mapStateToProps = (state) => ({
    activeCategory: state.activeCategory,
});

const mapDispatchToProps = (dispatch) => ({
    clearForm: dispatch(clearForm())
});

const ProductPageConnect = connect(mapStateToProps, mapDispatchToProps)(ProductPage)

export default ProductPageConnect;