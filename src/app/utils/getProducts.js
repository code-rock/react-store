import { isPriceInRange, isDiscount, isInCategory } from './checks';

const getProducts = (products, pricemin, pricemax, discount, activeCategory) => {
    console.log(products,'products')
    return products.filter(product => (
        isPriceInRange(Number(product.price), Number(pricemin), Number(pricemax)) &&
        isDiscount(Number(product.price), Number(product.subPriceContent),  Number(discount)) && 
        isInCategory(product.category, activeCategory)
    ));
}

export default getProducts;