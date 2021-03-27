import { createSelector } from 'reselect';
import getProducts from '../../utils/getProducts';
import spliteByNumber from '../../utils/spliteByNumber';
import { getMultiplePropertyFromUrl } from '../../utils/searchParamsUrl';

const getFilterValue = ({ filter, router, products }) => {
console.log(router, 'router,')
    return {
    pricemin: filter.pricemin, 
    pricemax: filter.pricemax, 
    discount: filter.discount, 
    activeCategory: filter.activeCategory,
    products: products.products,
    numProductsPerPage: filter.numProductsPerPage,
}};

const productsChunks = createSelector(
    getFilterValue,
    ({ products, pricemin, pricemax, discount, activeCategory, numProductsPerPage }) => {
        console.log( products, pricemin, pricemax, discount, activeCategory, numProductsPerPage, 'productsChunks');
        const afterFiltered = getProducts(products, pricemin, pricemax, discount, activeCategory);
        console.log(afterFiltered, 'afterFiltered');
        const afterPagination = spliteByNumber(afterFiltered, numProductsPerPage);
        console.log(afterPagination, 'afterPagination');
        return afterPagination;
    },
);

export default productsChunks;