import { createSelector } from 'reselect';
import getProducts from '../utils/getProducts';
import spliteByNumber from '../utils/spliteByNumber';

const getFilteraValue = (state) => ({
    pricemin: state.pricemin, 
    pricemax: state.pricemax, 
    discount: state.discount, 
    activeCategory: state.activeCategory,
    products: state.products,
    numProductsPerPage: state.numProductsPerPage,
});

const productsChunks = createSelector(
    getFilteraValue,
    ({ products, pricemin, pricemax, discount, activeCategory, numProductsPerPage }) => {
        const afterFiltered = getProducts(products, pricemin, pricemax, discount, activeCategory);
        const afterPagination = spliteByNumber(afterFiltered, numProductsPerPage);
 
        return afterPagination;
    },
);

export default productsChunks;