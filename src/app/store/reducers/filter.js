import { initialState } from '../index';
import * as types from '../types';

export default function filterReducer(state = initialState, action) {
    console.log(state, action, 'ddddddddd')
    switch(action.type) {
        case types.PRICEMIN_CHANGE: {
            return { 
                ...state, 
                pricemin: action.pricemin
            };
        }
        case types.PRICEMAX_CHANGE: {
            return { 
                ...state, 
                pricemax: action.pricemax
            };
        }
        case types.DISCOUNT_CHANGE: {
            return { 
                ...state, 
                discount: action.discount
            };
        }
        default: {
            return state
        }
    }
}