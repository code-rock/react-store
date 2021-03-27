import { createSelector } from 'reselect';
import getProducts from '../../utils/getProducts';
import spliteByNumber from '../../utils/spliteByNumber';

const getFilterValue = ({ filter, products }) => {
    return {
        pricemin: filter.pricemin, 
        pricemax: filter.pricemax, 
        discount: filter.discount, 
        activeCategory: filter.activeCategory,
        products: products.products,
        numProductsPerPage: filter.numProductsPerPage,
    }
};

const productsChunks = createSelector(
    getFilterValue,
    ({ products, pricemin, pricemax, discount, activeCategory, numProductsPerPage }) => {
        const afterFiltered = getProducts(products, pricemin, pricemax, discount, activeCategory);
        const afterPagination = spliteByNumber(afterFiltered, numProductsPerPage);
        return afterPagination;
    },
);

export default productsChunks;