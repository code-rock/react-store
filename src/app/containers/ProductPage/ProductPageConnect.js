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

    render() {
        const { activeCategory } = this.props;
        return <ProductPageWrapper category={this.category}
                                   activeCategory={activeCategory} />
    }
};

const mapStateToProps = ({ filter }) => ({
    activeCategory: filter.activeCategory,
});

const mapDispatchToProps = (dispatch) => ({
    clearForm: () => dispatch(clearForm())
});

const ProductPageConnect = connect(mapStateToProps, mapDispatchToProps)(ProductPage)

export default ProductPageConnect;