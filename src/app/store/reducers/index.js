import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import filterReducer from './filter';

const createRootReducer = (history) => combineReducers({
    filter: filterReducer,
    router: connectRouter(history)
})

export default createRootReducer;