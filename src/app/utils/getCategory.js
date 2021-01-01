const getCategory = (arr = [], property = 'category') => {
    const category = [];
    arr.forEach((item) => {
        if (!category.includes(item[property])) {
            category.push(item[property]);
        }
    })

    return category;
}

export default getCategory;