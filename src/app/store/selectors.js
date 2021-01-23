import getProducts from '../utils/getProducts';
import spliteByNumber from '../utils/spliteByNumber';

export const filterChanged = (products, pricemin, pricemax, discount, activeCategory, activePage = 1, numProductsPerPage = 6) => {
    const afterFiltered = getProducts(products, pricemin, pricemax, discount, activeCategory);
    const afterPagination = spliteByNumber(afterFiltered, numProductsPerPage);
    return {
                sortedProducts: afterPagination,
                maxPage: afterPagination.length,
                activePage: 1
            }
}