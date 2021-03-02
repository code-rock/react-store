import { connect } from 'react-redux';
import { changeActivePage } from '../store/actions';
import PaginationWrapper from '../components/Pagination';
import productsChunks from '../store/selectors';
import UsePageNumber from '../hocs/UsePageNumber';

const mapStateToProps = (state) => ({
    activePage: state.activePage,
    maxPage: productsChunks(state).length,
});

const mapDispatchToProps = (dispatch) => ({
    //changeActivePage: (num) => dispatch(changeActivePage(num)),
});
//const Pagination = UsePageNumber(PaginationWrapper);
const PaginationConnect = connect(mapStateToProps, mapDispatchToProps)(PaginationWrapper)

export default PaginationConnect;