import { initialState } from './index';
import * as types from './types';

export default function filterChangeReducer(state, action) {
    switch(action.type) {
        case types.PRICEMIN_CHANGE: {
            return { 
                ...state, 
                pricemin: action.pricemin,
                activePage: 1
            };
        }
        case types.PRICEMAX_CHANGE: {
            return { 
                ...state, 
                pricemax: action.pricemax,
                activePage: 1
            };
        }
        case types.DISCOUNT_CHANGE: {
            return { 
                ...state, 
                discount: action.discount,
                activePage: 1
            };
        }
        case types.ACTIVECATEGORY_CHANGE: {
            return { 
                ...state, 
                activeCategory: action.activeCategory,
                activePage: 1
            };
        }
        case types.ACTIVE_PAGE_CHANGED: {
            return { ...state, activePage: action.payload }
        }
        case types.CLEAR_FORM: {
            return initialState;
        }
        default: {
            return state
        }
    }

}