import getCategory from '../utils/getCategory';
import getRange from '../utils/getRange';
import products from '../../products';
import configureStore from './configureStore';

import {
    getUniquePropertyFromUrl,
    getMultiplePropertyFromUrl,
} from '../utils/searchParamsUrl';

const prices = getRange(products);
const category = getCategory(products);

export const initialState = {
        pricemin: getUniquePropertyFromUrl('pricemin') || prices.min, 
        pricemax: getUniquePropertyFromUrl('pricemax') || prices.max,
        discount: getUniquePropertyFromUrl('discount') || 0,
        activeCategory: getMultiplePropertyFromUrl('category') || category,
        products: products,
        numProductsPerPage: 6,    
};

const store = configureStore(initialState);
export default store;