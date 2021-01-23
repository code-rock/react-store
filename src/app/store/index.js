import { createStore } from 'redux';
import filterChangeReducer from './reducers';
import getRange from '../utils/getRange';
import products from '../../products';
import { filterChanged } from './selectors';
import spliteByNumber from '../utils/spliteByNumber';

import {
    getUniquePropertyFromUrl,
    getMultiplePropertyFromUrl,
} from '../utils/searchParamsUrl';

const prices = getRange(products);

export const initialState = {
    pricemin: getUniquePropertyFromUrl('pricemin') || prices.min, 
    pricemax: getUniquePropertyFromUrl('pricemax') || prices.max,
    discount: getUniquePropertyFromUrl('discount') || 0,
    activeCategory: getMultiplePropertyFromUrl('category'),
    activePage: Number(getUniquePropertyFromUrl('pageNum')) || 1
};

const sortedProducts = filterChanged(products, initialState.pricemin, initialState.pricemax, initialState.discount, initialState.activeCategory).sortedProducts;
initialState.sortedProducts = sortedProducts.length ? sortedProducts : spliteByNumber(products);
initialState.maxPage = initialState.sortedProducts.length;

const store = createStore(filterChangeReducer, initialState);

export default store;