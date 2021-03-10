import getCategory from '../utils/getCategory';
import getRange from '../utils/getRange';
import products from '../../products';
import configureStore from './configureStore';

import {
    getMultiplePropertyFromUrl,
} from '../utils/searchParamsUrl';

const prices = getRange(products);
const category = getCategory(products);
const searchParams = new URLSearchParams(window.location.search);

export const initialState = {
        pricemin: searchParams.get('pricemin') || prices.min, 
        pricemax: searchParams.get('pricemax') || prices.max,
        discount: searchParams.get('discount') || 0,
        products: products,
        numProductsPerPage: 6,    
};

const store = configureStore(initialState);
export default store;