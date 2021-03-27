import getCategory from '../../utils/getCategory';
import {
    ADD_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_STARTED,
    ADD_PRODUCTS_FAILURE
} from '../types';



const addProductsSuccess = (products, categories, status) => ({
    type: ADD_PRODUCTS_SUCCESS,
    payload: {
        products, 
        categories,
        status
    }
});
  
const addProductsStarted = () => ({
    type: ADD_PRODUCTS_STARTED
});
  
const addProductsFailure = status => ({
    type: ADD_PRODUCTS_FAILURE,
});
  
const addProducts = ({ url = 'https://course-api.school.csssr.com/products' }) => {
    return dispatch => {
        dispatch(addProductsStarted());
  
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {                    
                    throw new Error('Что-то пошло не так ...');
                }
            }).then(data => {
                if (data.products.length) {
                    const categories = getCategory(data.products, 'category');
                    dispatch(addProductsSuccess(data.products, categories, 'ok'));
                } else {
                    dispatch(addProductsSuccess(data.products, [], 'nothing'));
                }          
            }).catch(e => {
                dispatch(addProductsFailure('error'));
            }) 
    }
}

export default addProducts; 
  