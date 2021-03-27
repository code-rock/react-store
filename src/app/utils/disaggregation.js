// Разбивает строку на интервалы n-ной длины (Пример: '45676454214' -> ['45', '676', '454', '214'])

export default function disaggregation(str = '', n = 3) {
    const len = str.length;
    const firstNumRank = len % n;
    const regexp = new RegExp(`.{1,${n}}` , 'g');
    return len === firstNumRank ? [str] : [str.substring(0, firstNumRank), ...str.substring(firstNumRank).match(regexp)];
}