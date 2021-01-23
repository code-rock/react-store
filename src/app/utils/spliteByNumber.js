const spliteByNumber = (arr, numProductsPerPage = 6) => {
    const splitedProducts = [];
    let i = 0;
    while (i < arr.length) {
        const next = i + numProductsPerPage;
        splitedProducts.push(arr.slice(i, next));
        i = next;
    }
    return splitedProducts;
}

export default spliteByNumber;