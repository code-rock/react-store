import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import filterReducer from './filter';
//import routerReducer from  './router';

const createRootReducer = (history) => combineReducers({
    filter: filterReducer,
    router: connectRouter(history),
    //url: routerReducer
})
//console.log(createRootReducer)
export default createRootReducer;