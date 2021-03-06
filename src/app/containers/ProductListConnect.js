import { connect } from 'react-redux';
import ProductListWrapper from '../components/ProductList/ProductListWrapper';
import productsChunks from '../store/selectors/productsChunks';

const mapStateToProps = (state) => ({
    products: productsChunks(state)
});
 
const ProductListConnect = connect(mapStateToProps, null)(ProductListWrapper)
 
export default ProductListConnect;
 