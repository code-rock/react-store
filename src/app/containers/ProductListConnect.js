import { connect } from 'react-redux';
import ProductListWrapper from '../components/ProductList/ProductListWrapper';
import productsChunks from '../store/selectors';

const mapStateToProps = (state) => ({
    products: productsChunks(state),
    activePage: state.activePage
});
 
const ProductListConnect = connect(mapStateToProps, null)(ProductListWrapper)
 
export default ProductListConnect;
 