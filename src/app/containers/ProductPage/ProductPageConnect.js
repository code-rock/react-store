import React from 'react';
import { connect } from 'react-redux';
import products from '../../../products';
import getCategory from '../../utils/getCategory';
import ProductPageWrapper from './ProductPage';
import getActiveCategoryFromUrl from '../../store/selectors/activeCategory';

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.category = getCategory(products); 
    }

    render() {
        const { search, pathname, hash } = this.props;
        console.log(search, pathname, 'search');
        return <ProductPageWrapper search={search}
                                   pathname={pathname}
                                   hash={hash}
                                   category={this.category}
                                   activeCategory={getActiveCategoryFromUrl(search, 'category')} />
    }
};

const mapStateToProps = (state) => {
    console.log(state,' state33333333333333');
    return ({
    pricemax: state.router.location.query.pricemax, 
    pricemin: state.router.location.query.pricemin,
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,     
})} ;

const mapDispatchToProps = (dispatch) => ({
});

const ProductPageConnect = connect(mapStateToProps, mapDispatchToProps)(ProductPage)

export default ProductPageConnect;