import { CHANGED_PRODUCTS_FILTER } from '../types';

const productsFilterChanged = () => {
    return {
        type: CHANGED_PRODUCTS_FILTER,
        payload: {
            page: 1
        } 
    }
}

export default productsFilterChanged;