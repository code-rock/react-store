import { createStore } from 'redux';
import filterChangeReducer from './reducers';
import getProducts from '../utils/getProducts';
import getRange from '../utils/getRange';
import products from '../../products';

import {
    getUniquePropertyFromUrl,
    getMultiplePropertyFromUrl,
} from '../utils/searchParamsUrl';

const prices = getRange(products);

export const initialState = {
    pricemin: getUniquePropertyFromUrl('pricemin') || prices.min, 
    pricemax: getUniquePropertyFromUrl('pricemax') || prices.max,
    discount: getUniquePropertyFromUrl('discount') || 0,
    activeCategory: getMultiplePropertyFromUrl('category')
};

const currProducts = getProducts(products, initialState.pricemin, initialState.pricemax, initialState.discount, initialState.activeCategory);
initialState.productsWorthShowing = currProducts.length ? currProducts : products;
const store = createStore(filterChangeReducer, initialState);

export default store;