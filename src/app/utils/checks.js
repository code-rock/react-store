export const isPriceInRange = (price, min, max) => {
    return price >= min && price <= max;
}

export const isDiscount = (withSale, beforeSale, discount) => {
    return beforeSale ? ((beforeSale - withSale) / beforeSale * 100) >= discount : true;
}

export const isInCategory = (productCategory, activeCategory) => {
    return activeCategory.includes(productCategory) || !activeCategory.length;
}

export function isShort(max) {
    return max <= 5;
} 

export function isStart(active) {
    return active <= 3;
}

export function isEnd(active, max) {
    return active >= max - 3;
}