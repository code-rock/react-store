import getRange from '../utils/getRange';
import products from '../../products';
import configureStore from './configureStore';

const prices = getRange(products);
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