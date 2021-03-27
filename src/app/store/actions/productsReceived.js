import { GET_PRODUCTS } from '../types';

const productsReceived = (arr, categories, status) => {
    return {
        type: GET_PRODUCTS,
        payload: {
            products: arr,
            categories: categories,
            status: status,
        } 
    }
}

export default productsReceived;