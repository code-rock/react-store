import { connect } from 'react-redux';
import CategoryButton from './CategoryButton';
import { changeActiveCategory } from '../../store/actions';

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch(changeActiveCategory(e)),
});

const CategoryButtonConnect = connect(null, mapDispatchToProps)(CategoryButton)

export default CategoryButtonConnect;