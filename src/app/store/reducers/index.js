import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import filterReducer from './filter';
import productsReducer from './products';

const createRootReducer = (history) => combineReducers({
    filter: filterReducer,
    products: productsReducer,
    router: connectRouter(history)
})

export default createRootReducer;