import getRange from '../utils/getRange';
import products from '../../products';
import configureStore from './configureStore';

const prices = getRange(products);
const searchParams = new URLSearchParams(window.location.search);

export const initialState = {
        pricemin: parseInt(searchParams.get('pricemin')) || prices.min, 
        pricemax: parseInt(searchParams.get('pricemax')) || prices.max,
        discount: parseInt(searchParams.get('discount')) || 0,
        page: parseInt(searchParams.get('page')) || 1,  
        activeCategory: (searchParams.get('category') && searchParams.get('category').split(',')) || [],  
        numProductsPerPage: 6,  
};

const store = configureStore(initialState);
export default store;