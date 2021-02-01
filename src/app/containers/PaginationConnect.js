import { connect } from 'react-redux';
import { changeActivePage } from '../store/actions';
import PaginationWrapper from '../components/Pagination/Pagination';
import productsChunks from '../store/selectors';

const mapStateToProps = (state) => {
   return {
        activePage: state.activePage,
        maxPage: productsChunks(state).length,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActivePage: (num) => dispatch(changeActivePage(num)),
    }
};

const PaginationConnect = connect(mapStateToProps, mapDispatchToProps)(PaginationWrapper)

export default PaginationConnect;