import { createStore } from 'redux';
import getCategory from '../utils/getCategory';
import filterChangeReducer from './reducers';
import getRange from '../utils/getRange';
import products from '../../products';

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
    activePage: Number(getUniquePropertyFromUrl('pageNum')) || 1,
    products: products,
    numProductsPerPage: 6
};

const store = createStore(filterChangeReducer, initialState);

export default store;