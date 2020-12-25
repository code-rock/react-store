export const isPriceInRange = (price, min, max) => {
    return price >= min && price <= max;
}

export const isDiscount = (withSale, beforeSale, discount) => {
    return beforeSale ? ((beforeSale - withSale) / beforeSale * 100) >= discount : true;
}

export const isInCategory = (productCategory, activeCategory) => {
    return activeCategory.includes(productCategory) || !activeCategory.length;
}