const getCategory = (arr = [], property = 'category') => {
    const category = [];
    arr.forEach((item) => {
        if (!category.includes(item[property])) {
            category.push(item[property]);
        }
    })
console.log(category,'ggggg')
    return category;
}

export default getCategory;