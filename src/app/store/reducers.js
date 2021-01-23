import { initialState } from './index';
import * as types from './types';
import products from '../../products';
import { filterChanged } from './selectors';

export default function filterChangeReducer(state, action) {
    console.log(action.type,action);
    switch(action.type) {
        case types.PRICEMIN_CHANGE: {
            return { 
                ...state, 
                pricemin: action.pricemin,
                ...filterChanged(products, action.pricemin, state.pricemax, state.discount, state.activeCategory)
            };
        }
        case types.PRICEMAX_CHANGE: {
            return { 
                ...state, 
                pricemax: action.pricemax,
                ...filterChanged(products, state.pricemin, action.pricemax, state.discount, state.activeCategory)
            };
        }
        case types.DISCOUNT_CHANGE: {
            return { 
                ...state, 
                discount: action.discount,
                ...filterChanged(products, state.pricemin, state.pricemax, action.discount, state.activeCategory)
            };
        }
        case types.ACTIVECATEGORY_CHANGE: {
            return { 
                ...state, 
                activeCategory: action.activeCategory,
                ...filterChanged(products, state.pricemin, state.pricemax, state.discount, action.activeCategory)
            };
        }
        case types.ACTIVE_PAGE_CHANGED: {
            return { ...state, activePage: action.payload }
        }
        case types.FILTER_CHANGED: {
            return { ...state, ...action.payload }
        }
        case types.CLEAR_FORM: {
            return initialState;
        }
        default: {
            return state
        }
    }

}