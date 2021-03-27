import { CHANGED_PRODUCTS_STATUS } from '../types';

const productsStatusChanged = (status) => ({
    type: CHANGED_PRODUCTS_STATUS,
    payload: {
        status
    }
});

export default productsStatusChanged;
    
