import { connect } from 'react-redux';
import { changeActivePage } from '../../store/actions';
import PaginationWrapper from './Pagination';

const mapStateToProps = (state) => {
   return {
        activePage: state.activePage,
        maxPage: state.maxPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeActivePage: (num) => dispatch(changeActivePage(num)),
    }
};
console.log('2')
const PaginationConnect = connect(mapStateToProps, mapDispatchToProps)(PaginationWrapper)

export default PaginationConnect;