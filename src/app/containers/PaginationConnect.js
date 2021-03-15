import { connect } from 'react-redux';
import PaginationWrapper from '../components/Pagination';
import productsChunks from '../store/selectors/productsChunks';

const mapStateToProps = (state) => ({
    max: productsChunks(state).length,
});

const PaginationConnect = connect(mapStateToProps, null)(PaginationWrapper)

export default PaginationConnect;