import { 
    CHANGED_PRODUCTS_STATUS,
    ADD_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_STARTED,
    ADD_PRODUCTS_FAILURE
 } from '../types';

const initialState = {
    products: [],
    categories: [],
    status: 'loading',    
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCTS_SUCCESS: {
            return { 
                ...state, 
                products: action.payload.products,
                categories: action.payload.categories,
                status: action.payload.status
            }
        }
        case ADD_PRODUCTS_STARTED: {
            return { 
                ...state, 
                status: 'loading',
            }
        }
        case ADD_PRODUCTS_FAILURE: {
            return { 
                ...state, 
                status: 'error',
            }
        }
        case CHANGED_PRODUCTS_STATUS: {
            return { 
                ...state, 
                status: action.payload.status,
            }
        }
        default: {
            return state
        }
    }
}