import { connect } from 'react-redux';
import ProductListWrapper from './ProductListWrapper';

const mapStateToProps = (state) => ({
    products: state.sortedProducts,
    activePage: state.activePage
});
 
const ProductListConnect = connect(mapStateToProps, null)(ProductListWrapper)
 
export default ProductListConnect;
 