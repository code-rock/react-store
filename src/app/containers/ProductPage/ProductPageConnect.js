import React from 'react';
import { connect } from 'react-redux';
import products from '../../../products';
import getCategory from '../../utils/getCategory';
import { getMultiplePropertyFromSearch } from '../../utils/searchParamsUrl';
import ProductPageWrapper from './ProductPage';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.category = getCategory(products); 
    }

    render() {
        const { search } = this.props;
        return <ProductPageWrapper category={this.category}
                                   activeCategory={getMultiplePropertyFromSearch(search, 'category')} />
    }
};

const mapStateToProps = (state) => ({
    search: state.router.location.search  
}) ;

const ProductPageConnect = connect(mapStateToProps, null)(ProductPage)

export default ProductPageConnect;