// Получае [{}, {}] и свойство диапазон которого нужно найти. 
// Возвращает объект с максимальным и минимальным значениями

const getRange = (arr = [], property = 'price') => {
    if (!Array.isArray(arr) && !arr.length) {
        return { min: 0, max: 0 }
    }

    let min = arr[0][property];
    let max = arr[0][property];
    arr.forEach(item => {
        if (item[property] > max)  max = item[property];
        if (item[property] < min)  min = item[property];
    })
    return { min, max };
}

export default getRange;