import { connect } from 'react-redux';
import CategoryButton from '../components/CategoryButton/CategoryButton';
import {getTogglePropertyFromUrl} from '../utils/searchParamsUrl';

const mapDispatchToProps = (dispatch) => ({
    onChange: ({ target: { value }}) => getTogglePropertyFromUrl('category', value),
});

const CategoryButtonConnect = connect(null, mapDispatchToProps)(CategoryButton)

export default CategoryButtonConnect;